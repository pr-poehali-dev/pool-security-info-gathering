import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const advantages = [
    {
      icon: "Shield",
      title: "Надежная защита",
      description: "Многоуровневые датчики отслеживают любое движение в воде 24/7",
    },
    {
      icon: "Smartphone",
      title: "Умное управление",
      description: "Контроль через мобильное приложение из любой точки мира",
    },
    {
      icon: "Zap",
      title: "Мгновенная реакция",
      description: "Уведомление на телефон менее чем за 1 секунду",
    },
    {
      icon: "Settings",
      title: "Легкая установка",
      description: "Монтаж системы за 2 часа без повреждения бассейна",
    },
  ];

  const systems = [
    {
      name: "Aqua Guard Basic",
      features: [
        "Датчики движения в воде",
        "SMS-уведомления",
        "Автономная работа 48ч",
        "Гарантия 2 года",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      name: "Aqua Guard Pro",
      features: [
        "Подводные камеры HD",
        "Мобильное приложение",
        "Тревожная сирена 120дБ",
        "Интеграция с умным домом",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      popular: true,
    },
    {
      name: "Aqua Guard Elite",
      features: [
        "AI-распознавание объектов",
        "Автоматическое покрытие",
        "Облачное хранилище видео",
        "Гарантия 5 лет",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/ead82427-97f2-45f0-9996-21bed6f026e2/files/c95ced54-c0b3-4972-997b-790dd63e9570.jpg)'}}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Безопасность вашего бассейна под контролем
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Передовые системы защиты для посетителей бассейнов и водоемов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Оставить заявку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
                onClick={() =>
                  document
                    .getElementById("systems")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Инновационные технологии для максимальной защиты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <Icon name={advantage.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Наши системы безопасности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Решения для любого типа бассейна с видео-демонстрацией
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {systems.map((system, index) => (
              <Card
                key={index}
                className={`relative border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  system.popular
                    ? "border-accent shadow-xl"
                    : "border-gray-200 shadow-lg"
                }`}
              >
                {system.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-100">
                    <iframe
                      width="100%"
                      height="100%"
                      src={system.videoUrl}
                      title={`Демо ${system.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{system.name}</h3>
                  <ul className="space-y-3 mb-6">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          className="text-green-500 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full text-lg py-6 rounded-xl ${
                      system.popular
                        ? "gradient-bg text-white hover:opacity-90"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Заказать систему
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Оставьте заявку
              </h2>
              <p className="text-xl text-gray-600">
                Мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Ваше имя
                    </label>
                    <Input
                      type="text"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Сообщение (необязательно)
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем бассейне..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="text-lg rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-bg text-white text-lg py-6 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Aqua Guard</h3>
              <p className="text-gray-400">
                Системы безопасности для бассейнов нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@aquaguard.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a
                  href="#advantages"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Преимущества
                </a>
                <a
                  href="#systems"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Системы
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Aqua Guard. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;