import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      name: 'Анна К.',
      zodiac: 'Дева',
      rating: 5,
      text: 'Браслет превзошел все ожидания! Амазонит действительно помогает мне сосредоточиться на работе. Качество изготовления на высшем уровне.',
      date: '15 января 2024'
    },
    {
      name: 'Михаил П.',
      zodiac: 'Скорпион',
      rating: 5,
      text: 'Заказал браслет с черным турмалином для жены. Она в восторге! Говорит, что чувствует прилив энергии и уверенности.',
      date: '8 января 2024'
    },
    {
      name: 'Елена В.',
      zodiac: 'Рыбы',
      rating: 5,
      text: 'Аквамарин — мой любимый камень, и этот браслет просто волшебный. Ношу уже месяц, чувствую гармонию и покой.',
      date: '3 января 2024'
    },
    {
      name: 'Дмитрий Л.',
      zodiac: 'Лев',
      rating: 4,
      text: 'Солнечный камень очень красивый, браслет стильный. Единственное — доставка заняла чуть больше времени, чем обещали.',
      date: '28 декабря 2023'
    },
    {
      name: 'Ольга С.',
      zodiac: 'Весы',
      rating: 5,
      text: 'Розовый кварц просто божественный! Браслет помогает в отношениях, стала спокойнее и увереннее в себе.',
      date: '22 декабря 2023'
    },
    {
      name: 'Александр М.',
      zodiac: 'Стрелец',
      rating: 5,
      text: 'Лазурит выглядит потрясающе! Качество металла и камней отличное. Рекомендую всем Стрельцам!',
      date: '18 декабря 2023'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
      />
    ));
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
              Отзывы клиентов
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Узнайте, что говорят наши клиенты о силе астрологических браслетов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-primary">{review.zodiac}</p>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{review.text}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                <p className="text-foreground/80">Довольных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <p className="text-foreground/80">Средняя оценка</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-foreground/80">Повторных покупок</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Поделитесь своим опытом</h3>
                <p className="text-muted-foreground mb-6">
                  Расскажите другим о том, как астрологические браслеты изменили вашу жизнь. 
                  Ваш отзыв поможет другим людям сделать правильный выбор.
                </p>
                <div className="flex space-x-1 justify-center">
                  {renderStars(5)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;