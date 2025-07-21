import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Icon from '@/components/ui/icon';

const Contacts = () => {
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
              Контакты
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Свяжитесь с нами для получения персональной консультации астролога
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span>Наш адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    г. Москва, ул. Звездная, д. 15<br />
                    Метро "Космическая" (5 минут пешком)
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span>Телефон</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-lg font-medium">
                    +7 (495) 123-45-67
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ежедневно с 10:00 до 20:00
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-lg font-medium">
                    info@astrobracelets.ru
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ответим в течение 2 часов
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                    <span>Социальные сети</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Instagram" className="text-pink-400" size={20} />
                    <span>@astro_bracelets_ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Send" className="text-blue-400" size={20} />
                    <span>@AstroBraceletBot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageSquare" className="text-green-400" size={20} />
                    <span>+7 (905) 123-45-67 (WhatsApp)</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/90 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Send" className="text-primary" size={24} />
                  <span>Написать нам</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Знак зодиака</label>
                    <Input placeholder="Например: Лев" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует. Наш астролог поможет подобрать идеальный браслет..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <Icon name="Clock" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">Режим работы</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Интернет-магазин</h4>
                    <p className="text-muted-foreground">Работаем круглосуточно</p>
                    <p className="text-muted-foreground">Обработка заказов: 10:00-20:00</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Консультации астролога</h4>
                    <p className="text-muted-foreground">Понедельник-пятница: 11:00-19:00</p>
                    <p className="text-muted-foreground">Суббота-воскресенье: 12:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;