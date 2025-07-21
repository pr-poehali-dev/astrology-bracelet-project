import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/zodiac', label: 'Зодиак', icon: 'Star' },
    { path: '/reviews', label: 'Отзывы', icon: 'MessageCircle' },
    { path: '/contacts', label: 'Контакты', icon: 'Mail' },
    { path: '/terms', label: 'Доставка', icon: 'Package' },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Astro Bracelets
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;