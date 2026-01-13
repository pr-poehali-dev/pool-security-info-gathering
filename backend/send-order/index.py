import json
import os
import urllib.request
import urllib.parse
from datetime import datetime


def handler(event: dict, context) -> dict:
    '''Отправляет заявку с сайта в Telegram группу'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        name = body.get('name', 'Не указано')
        phone = body.get('phone', 'Не указано')
        email = body.get('email', 'Не указано')
        pool_size = body.get('poolSize', 'Не указано')
        has_project = body.get('hasProject', 'Не указано')
        bracelets_count = body.get('braceletsCount', 'Не указано')
        delivery_time = body.get('deliveryTime', 'Не указано')
        message = body.get('message', 'Не указано')
        
        timestamp = datetime.now().strftime('%d.%m.%Y %H:%M')
        
        telegram_message = f"""🔔 <b>Новая заявка с сайта Sentag</b>

📅 Дата: {timestamp}

👤 <b>Контактные данные:</b>
• Имя: {name}
• Телефон: {phone}
• Email: {email}

🏊 <b>Информация о бассейне:</b>
• Размеры и объем: {pool_size}
• Готовый проект: {has_project}
• Количество браслетов: {bracelets_count}
• Сроки поставки: {delivery_time}

💬 <b>Дополнительная информация:</b>
{message}

━━━━━━━━━━━━━━━━━━━━
"""
        
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = {
            'chat_id': chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'})
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Telegram API error', 'details': result})
                }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
