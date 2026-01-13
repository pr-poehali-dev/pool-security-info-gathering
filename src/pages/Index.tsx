import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    poolSize: "",
    hasProject: "",
    braceletsCount: "",
    deliveryTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/d98554c5-b71d-479f-b5a2-09263c6db0aa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          poolSize: "",
          hasProject: "",
          braceletsCount: "",
          deliveryTime: "",
          message: "",
        });
      } else {
        throw new Error(result.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Попробуйте позже или позвоните нам.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const advantages = [
    {
      icon: "Shield",
      title: "Надежная защита",
      description: "Датчики отслеживают движение в воде 24/7",
    },
    {
      icon: "Award",
      title: "Европейское качество",
      description: "Оборудование разработано и производится в Швеции",
    },
    {
      icon: "Zap",
      title: "Мгновенная реакция",
      description: "Никаких задержек сигнала тревоги. Уведомление менее чем за 1 секунду",
    },
    {
      icon: "Users",
      title: "Особое внимание к детям и пожилым",
      description:
        "Браслеты и датчики настраиваются для разных возрастных категорий и особенностей бассейнов",
    },
    {
      icon: "Droplets",
      title: "Срабатывает в любой воде",
      description:
        "Ледяная вода в проруби или горячий источник с непрозрачной водой — система работает всегда",
    },
    {
      icon: "Network",
      title: "Подружимся со всеми",
      description:
        "Наша система интегрируется со всеми известными системами безопасности в бассейнах",
    },
  ];

  const components = [
    {
      icon: "Watch",
      title: "Браслеты",
      description:
        "Умные браслеты для посетителей с NFC-меткой. Отслеживают глубину и время нахождения под водой. Настраиваются индивидуально для детей и взрослых. Могут использоваться для оплаты и доступа.",
    },
    {
      icon: "Cpu",
      title: "Блок управления",
      description:
        "Центральный модуль обработки данных. Управляет всей системой безопасности. Настройка параметров под каждый бассейн. Интеграция с другими системами безопасности.",
    },
    {
      icon: "Radio",
      title: "Сенсоры",
      description:
        "Датчики, установленные по периметру бассейна. Принимают сигналы от браслетов. Мгновенная передача данных на блок управления. Работают в любых условиях воды.",
    },
    {
      icon: "TestTube",
      title: "Система тестирования",
      description:
        "Проверка работоспособности браслетов перед использованием. Автоматическая диагностика системы. Гарантия исправности оборудования. Простая в использовании.",
    },
    {
      icon: "AlertTriangle",
      title: "Тревожная кнопка",
      description:
        "Ручная активация сигнала тревоги. Дублирующая система безопасности. Размещается в зоне видимости спасателей. Мгновенное оповещение.",
    },
  ];

  const benefits = [
    {
      icon: "ShieldCheck",
      title: "Обеспечение безопасности людей на закрытой воде",
      description:
        "Система Sentag — это многоуровневая защита жизни посетителей бассейнов и аквапарков",
    },
    {
      icon: "UserCheck",
      title: "Оптимизация работы спасателей",
      description:
        "Технология помогает спасателям быстро реагировать на критические ситуации",
    },
    {
      icon: "TrendingUp",
      title: "Повышение имиджа и репутации заведения",
      description:
        "Современные системы безопасности — показатель заботы о посетителях",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.poehali.dev/projects/ead82427-97f2-45f0-9996-21bed6f026e2/files/5cc37043-bfbf-4212-9da7-acc016e0664b.jpg)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white animate-fade-in">
            <div className="mb-8">
              <span className="inline-block text-3xl font-bold bg-white text-primary px-6 py-2 rounded-lg">
                SENTAG
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Безопасность вашего бассейна под контролем
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 leading-relaxed">
              Передовые системы защиты для посетителей бассейнов. Система
              обнаружения утопающих производства компании «Sentag» − современное
              решение для обеспечения безопасности плавания.
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80">
              Её внедрение будет актуально в бассейнах, аквапарках и на других
              объектах, где есть закрытая вода.
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
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="Info" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Как работает система обнаружения утопающих?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            1
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Браслет отслеживает посетителя
                        </h3>
                        <p className="text-gray-600">
                          Если посетитель бассейна находится продолжительное
                          время на критической глубине, браслет подает сигнал
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            2
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Сенсоры получают сигнал
                        </h3>
                        <p className="text-gray-600">
                          Информация поступает на сенсоры, установленные в
                          бассейне
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            3
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Мгновенное оповещение
                        </h3>
                        <p className="text-gray-600">
                          Тревожный сигнал отображается на дисплее настенного
                          модуля, включаются световые и звуковые приборы
                          оповещения
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/ead82427-97f2-45f0-9996-21bed6f026e2/files/a42dc3cc-aa1b-4323-8240-18b03e325b4a.jpg"
                  alt="Система мониторинга"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-primary">
                  Продолжительность времени нахождения и глубина настраивается
                  отдельно
                </span>{" "}
                с учетом особенностей бассейнов и возрастной категории
                посетителей. Браслеты могут отличаться настройками и цветами. В
                том числе размерами ремешка.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-8">
              <p className="text-xl leading-relaxed text-gray-800 mb-4">
                <span className="font-bold text-accent">
                  Инновационная технология Sentag
                </span>{" "}
                обеспечивает самую раннюю и точную сигнализацию об обнаружении
                утопления с целью сокращения времени на спасение в случае
                инцидента.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Технические решения, предлагаемые нашей компанией,{" "}
                <span className="font-bold">
                  сводят к нулю риски того что критическая ситуация останется
                  незамеченной!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Система обнаружения утопающих состоит из 5 основных компонентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждый модуль системы разработан для обеспечения максимальной
              безопасности
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {components.map((component, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <Icon name={component.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {component.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Дополнительные возможности
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
              При необходимости система обнаружения утопающих может быть
              дополнена компонентами, позволяющими существенно расширить
              функционал.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <Icon name="CreditCard" className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Оплата браслетом</span>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <Icon name="Lock" className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">
                  Ограниченный доступ в зоны и помещения
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <Icon name="Inbox" className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">
                  Открытие ящика для хранения вещей
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <Icon name="Nfc" className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">
                  Использование технологии NFC метки
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Что вы получаете используя «Sentag»
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Почему выбирают Sentag
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <Icon name={advantage.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                О компании
              </h2>
            </div>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="Building2" className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">Меридиан</h3>
                        <p className="text-gray-600">Надёжный партнёр</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Icon
                          name="CheckCircle"
                          className="text-green-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <p className="text-gray-700">
                          Эксклюзивное право на реализацию систем Sentag в России
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon
                          name="CheckCircle"
                          className="text-green-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <p className="text-gray-700">
                          Заказы любого уровня сложности — от частных бассейнов до
                          олимпийских объектов
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon
                          name="CheckCircle"
                          className="text-green-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <p className="text-gray-700">
                          Многолетний опыт работы и довольные заказчики
                        </p>
                      </div>
                    </div>

                    <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
                      <p className="text-xl font-bold text-accent mb-2">
                        Миссия компании:
                      </p>
                      <p className="text-2xl font-bold text-gray-800">
                        Бассейны должны быть безопасны!
                      </p>
                    </div>
                  </div>

                  <div className="p-12 bg-white">
                    <h3 className="text-2xl font-bold mb-6">Контакты</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Адрес</p>
                          <p className="text-gray-600">
                            г. Тюмень, ул. 30 лет Победы, д. 38, офис 515
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Телефон</p>
                          <a
                            href="tel:+73452568286"
                            className="text-primary hover:underline text-lg"
                          >
                            +7 (3452) 56-82-86
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 mb-1">Email</p>
                          <a
                            href="mailto:info@meridian-t.ru"
                            className="text-primary hover:underline text-lg"
                          >
                            info@meridian-t.ru
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Оставить заявку
              </h2>
              <p className="text-xl text-gray-600">
                Заполните анкету, и мы свяжемся с вами для консультации
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold mb-2">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base font-semibold mb-2">
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="info@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="poolSize" className="text-base font-semibold mb-2">
                      Размеры и объем бассейна
                    </Label>
                    <Input
                      id="poolSize"
                      placeholder="Например: 25x12 м, глубина 1.2-3 м, объем 450 м³"
                      value={formData.poolSize}
                      onChange={(e) =>
                        setFormData({ ...formData, poolSize: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hasProject" className="text-base font-semibold mb-2">
                      Есть ли готовый проект под систему безопасности?
                    </Label>
                    <Input
                      id="hasProject"
                      placeholder="Да / Нет / В разработке"
                      value={formData.hasProject}
                      onChange={(e) =>
                        setFormData({ ...formData, hasProject: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="braceletsCount"
                        className="text-base font-semibold mb-2"
                      >
                        Количество браслетов одновременно
                      </Label>
                      <Input
                        id="braceletsCount"
                        type="number"
                        placeholder="Например: 50"
                        value={formData.braceletsCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            braceletsCount: e.target.value,
                          })
                        }
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="deliveryTime"
                        className="text-base font-semibold mb-2"
                      >
                        Сроки поставки / запуска объекта
                      </Label>
                      <Input
                        id="deliveryTime"
                        placeholder="Например: июнь 2026"
                        value={formData.deliveryTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            deliveryTime: e.target.value,
                          })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold mb-2">
                      Дополнительная информация
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваши требования или задайте вопросы..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 rounded-xl shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить заявку
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="h-auto py-6 px-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="text-left">
                  <Icon name="Phone" className="mb-2" size={24} />
                  <p className="font-bold text-base">Обратный звонок</p>
                  <p className="text-xs text-gray-500">
                    Мы перезвоним в течение часа
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-auto py-6 px-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="text-left">
                  <Icon name="Calculator" className="mb-2" size={24} />
                  <p className="font-bold text-base">Запросить расчет</p>
                  <p className="text-xs text-gray-500">
                    Коммерческое предложение
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-auto py-6 px-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="text-left">
                  <Icon name="MessageSquare" className="mb-2" size={24} />
                  <p className="font-bold text-base">Задать вопрос</p>
                  <p className="text-xs text-gray-500">
                    Консультация специалиста
                  </p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold">SENTAG</span>
              <span className="text-gray-400 mx-3">×</span>
              <span className="text-xl font-semibold">Меридиан</span>
            </div>
            <p className="text-gray-400 mb-4">
              Система обнаружения утопающих для бассейнов и аквапарков
            </p>
            <p className="text-sm text-gray-500">
              © 2026 Меридиан. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;