import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Terms = () => {
  const deliveryOptions = [
    {
      icon: 'Package',
      title: 'Стандартная доставка',
      time: '3-5 рабочих дней',
      price: '300₽',
      description: 'Доставка курьером или в пункт выдачи'
    },
    {
      icon: 'Truck',
      title: 'Экспресс-доставка',
      time: '1-2 рабочих дня',
      price: '600₽',
      description: 'Быстрая доставка курьером'
    },
    {
      icon: 'MapPin',
      title: 'Самовывоз',
      time: 'В день заказа',
      price: 'Бесплатно',
      description: 'Забрать в нашем салоне'
    }
  ];

  const paymentMethods = [
    {
      icon: 'CreditCard',
      title: 'Банковской картой',
      description: 'Visa, MasterCard, МИР'
    },
    {
      icon: 'Smartphone',
      title: 'Электронными деньгами',
      description: 'Яндекс.Деньги, WebMoney, QIWI'
    },
    {
      icon: 'Banknote',
      title: 'Наличными',
      description: 'При получении или в салоне'
    },
    {
      icon: 'Building2',
      title: 'Банковским переводом',
      description: 'Для юридических лиц'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/93e32857-c757-45e6-88a8-9ca91ebd2665.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Доставка и оплата
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Удобные способы получения и оплаты ваших астрологических браслетов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Способы доставки</h2>
              <div className="space-y-6">
                {deliveryOptions.map((option, index) => (
                  <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={option.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl">{option.title}</h3>
                          <p className="text-sm text-muted-foreground">{option.time}</p>
                        </div>
                        <div className="ml-auto text-right">
                          <p className="text-lg font-bold text-primary">{option.price}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Способы оплаты</h2>
              <div className="space-y-6">
                {paymentMethods.map((method, index) => (
                  <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={method.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{method.title}</h3>
                          <p className="text-foreground/80">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span>Гарантии качества</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-400 mt-1" size={16} />
                  <p className="text-foreground/80">30 дней на возврат без объяснения причин</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-400 mt-1" size={16} />
                  <p className="text-foreground/80">Сертификат подлинности камней</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-green-400 mt-1" size={16} />
                  <p className="text-foreground/80">Гарантия 1 год на все изделия</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Gift" className="text-primary" size={24} />
                  <span>Дополнительные услуги</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" className="text-red-400 mt-1" size={16} />
                  <p className="text-foreground/80">Подарочная упаковка — 200₽</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Star" className="text-yellow-400 mt-1" size={16} />
                  <p className="text-foreground/80">Персональная консультация астролога — 500₽</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Zap" className="text-purple-400 mt-1" size={16} />
                  <p className="text-foreground/80">Зарядка браслета лунной энергией — 300₽</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/90 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Условия доставки по регионам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Москва и область</h4>
                  <p className="text-muted-foreground">Доставка в день заказа</p>
                  <p className="text-muted-foreground">При заказе до 15:00</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Санкт-Петербург</h4>
                  <p className="text-muted-foreground">1-2 рабочих дня</p>
                  <p className="text-muted-foreground">Курьером или в ПВЗ</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Другие регионы</h4>
                  <p className="text-muted-foreground">3-7 рабочих дней</p>
                  <p className="text-muted-foreground">Почта России, СДЭК</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-center text-foreground/80">
                  <Icon name="Info" className="inline mr-2" size={16} />
                  Бесплатная доставка при заказе от 5000₽
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;