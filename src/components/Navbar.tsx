import React from 'react';
import { Button } from '@/components/ui/button';
interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout: () => void;
}
const Navbar = ({
  activeSection,
  setActiveSection,
  onLogout
}: NavbarProps) => {
  const navItems = [{
    id: 'profile',
    label: 'Профиль',
    icon: '👤'
  }, {
    id: 'map',
    label: 'Карта',
    icon: '🗺️'
  }, {
    id: 'messages',
    label: 'Сообщения',
    icon: '💬'
  }, {
    id: 'planner',
    label: 'Планировщик',
    icon: '📅'
  }];
  return <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Гулять!</h1>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(item => <Button key={item.id} variant={activeSection === item.id ? "default" : "ghost"} onClick={() => setActiveSection(item.id)} className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg' : 'hover:bg-gray-100'}`}>
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Button>)}
          </div>
          
          <Button variant="outline" onClick={onLogout} className="rounded-full hover:bg-gray-100">
            Выйти
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;