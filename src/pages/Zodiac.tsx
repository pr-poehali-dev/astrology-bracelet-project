import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Zodiac = () => {
  const zodiacSigns = [
    { name: 'Овен', dates: '21 марта - 19 апреля', element: 'Огонь', stone: 'Красная яшма', price: '3500₽', emoji: '♈' },
    { name: 'Телец', dates: '20 апреля - 20 мая', element: 'Земля', stone: 'Зеленый авантюрин', price: '3500₽', emoji: '♉' },
    { name: 'Близнецы', dates: '21 мая - 20 июня', element: 'Воздух', stone: 'Цитрин', price: '3500₽', emoji: '♊' },
    { name: 'Рак', dates: '21 июня - 22 июля', element: 'Вода', stone: 'Лунный камень', price: '3800₽', emoji: '♋' },
    { name: 'Лев', dates: '23 июля - 22 августа', element: 'Огонь', stone: 'Солнечный камень', price: '4000₽', emoji: '♌' },
    { name: 'Дева', dates: '23 августа - 22 сентября', element: 'Земля', stone: 'Амазонит', price: '3500₽', emoji: '♍' },
    { name: 'Весы', dates: '23 сентября - 22 октября', element: 'Воздух', stone: 'Розовый кварц', price: '3700₽', emoji: '♎' },
    { name: 'Скорпион', dates: '23 октября - 21 ноября', element: 'Вода', stone: 'Черный турмалин', price: '4200₽', emoji: '♏' },
    { name: 'Стрелец', dates: '22 ноября - 21 декабря', element: 'Огонь', stone: 'Лазурит', price: '3900₽', emoji: '♐' },
    { name: 'Козерог', dates: '22 декабря - 19 января', element: 'Земля', stone: 'Гранат', price: '4100₽', emoji: '♑' },
    { name: 'Водолей', dates: '20 января - 18 февраля', element: 'Воздух', stone: 'Аметист', price: '3600₽', emoji: '♒' },
    { name: 'Рыбы', dates: '19 февраля - 20 марта', element: 'Вода', stone: 'Аквамарин', price: '3800₽', emoji: '♓' },
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Огонь': return 'text-red-400';
      case 'Земля': return 'text-green-400';
      case 'Воздух': return 'text-blue-400';
      case 'Вода': return 'text-cyan-400';
      default: return 'text-primary';
    }
  };

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
              Браслеты по знакам зодиака
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Выберите браслет, созданный специально для вашего знака зодиака
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zodiacSigns.map((sign, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{sign.emoji}</div>
                  <CardTitle className="text-xl">{sign.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{sign.dates}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Стихия:</span>
                    <span className={`text-sm font-medium ${getElementColor(sign.element)}`}>
                      {sign.element}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Камень:</span>
                    <span className="text-sm font-medium">{sign.stone}</span>
                  </div>
                  
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-lg text-primary">{sign.price}</span>
                    <Icon name="Gem" className="text-accent" size={16} />
                  </div>
                  
                  <Button className="w-full mt-4" size="sm">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Заказать браслет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Icon name="Info" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Как выбрать браслет?</h3>
                <p className="text-muted-foreground mb-6">
                  Каждый браслет содержит камни, специально подобранные для усиления положительных качеств вашего знака зодиака. 
                  Наши астрологи тщательно изучили влияние каждого минерала на энергетику человека.
                </p>
                <Button variant="outline" size="lg">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zodiac;