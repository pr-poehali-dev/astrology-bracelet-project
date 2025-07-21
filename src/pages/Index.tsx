import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: 'Star',
      title: 'Индивидуальный подход',
      description: 'Каждый браслет создается на основе вашего знака зодиака'
    },
    {
      icon: 'Gem',
      title: 'Натуральные камни',
      description: 'Используем только подлинные минералы и кристаллы'
    },
    {
      icon: 'Sparkles',
      title: 'Мистическая сила',
      description: 'Браслеты заряжены космической энергией'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/93e32857-c757-45e6-88a8-9ca91ebd2665.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Astro Bracelets
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Откройте силу космоса с нашими мистическими браслетами, созданными специально для вашего знака зодиака
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/zodiac">
                  <Icon name="Star" className="mr-2" size={20} />
                  Выбрать браслет
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/reviews">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Отзывы клиентов
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Астрологическая точность</h4>
                    <p className="text-muted-foreground">Каждый браслет создан с учетом особенностей вашего знака</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Качественные материалы</h4>
                    <p className="text-muted-foreground">Используем только натуральные камни и металлы</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Быстрая доставка</h4>
                    <p className="text-muted-foreground">Доставляем по всей России в течение 3-5 дней</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/607ceaf8-0f37-4c7d-b543-6cc7c945ff7e.jpg"
                alt="Астрологический браслет"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;