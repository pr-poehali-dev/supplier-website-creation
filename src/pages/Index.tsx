import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/10b35ddb-505d-46ff-b2be-1333f363d8c5.png"
                alt="ПОРТ ЭЛЕКТРО"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#catalog"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                О компании
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Контакты
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Запросить КП
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Поставка от 7 дней
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Импортное промышленное
                <span className="block text-blue-600">оборудование</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Поставляем оборудование ведущих мировых брендов из Китая.
                Быстрая доставка, гарантия качества, техническая поддержка.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Получить коммерческое предложение
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="Factory" className="h-16 w-16 text-blue-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Быстрая поставка
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Оборудование всех брендов от 7 дней
                  </p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        className="h-4 w-4 mr-1 text-green-500"
                      />
                      Гарантия
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        className="h-4 w-4 mr-1 text-green-500"
                      />
                      Сертификаты
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        className="h-4 w-4 mr-1 text-green-500"
                      />
                      Поддержка
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Партнеры и поставщики
            </h2>
            <p className="text-xl text-gray-600">
              Работаем с ведущими мировыми брендами промышленного оборудования
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <img
              src="https://cdn.poehali.dev/files/77a618ad-66f5-435b-8dad-6ffc6cd06d5a.jpg"
              alt="Бренды партнеры"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Преимущества работы с ПОРТ ЭЛЕКТРО
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Быстрая поставка</CardTitle>
                <CardDescription className="text-base">
                  Импортное оборудование всех брендов от 7 дней. Прямые поставки
                  из Китая без посредников.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
                <CardDescription className="text-base">
                  Все оборудование сертифицировано и имеет официальную гарантию
                  производителя.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Техподдержка</CardTitle>
                <CardDescription className="text-base">
                  Консультации по подбору оборудования и техническая поддержка
                  на всех этапах.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7 дней</div>
              <div className="text-blue-100">Минимальная поставка</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Техподдержка</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Брендов в наличии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Получить коммерческое предложение
              </h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и получите индивидуальное предложение в течение
                1 часа
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-gray-700"
                      >
                        Компания *
                      </Label>
                      <Input
                        id="company"
                        placeholder="Название компании"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Телефон *
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+7 (999) 123-45-67"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@company.ru"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="equipment"
                      className="text-sm font-medium text-gray-700"
                    >
                      Требуемое оборудование *
                    </Label>
                    <Textarea
                      id="equipment"
                      placeholder="Опишите требуемое оборудование: тип, характеристики, количество..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="https://cdn.poehali.dev/files/10b35ddb-505d-46ff-b2be-1333f363d8c5.png"
                alt="ПОРТ ЭЛЕКТРО"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 max-w-md">
                Надежный поставщик импортного промышленного оборудования.
                Работаем с ведущими мировыми брендами.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@port-electro.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Поставка оборудования</li>
                <li>Техническая поддержка</li>
                <li>Консультации</li>
                <li>Гарантийное обслуживание</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПОРТ ЭЛЕКТРО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
