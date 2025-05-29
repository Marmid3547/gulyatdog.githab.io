import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileSection from '@/components/ProfileSection';
import MapSection from '@/components/MapSection';
import MessagesSection from '@/components/MessagesSection';
import WalkPlanner from '@/components/WalkPlanner';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
const Index = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };
  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Гулять!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Социальная сеть для владельцев собак. Найдите компаньонов для прогулок, планируйте маршруты и общайтесь!
            </p>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐕</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Профили собак</h3>
                  <p className="text-gray-600 text-sm">Создайте профиль для вашего питомца</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Карта прогулок</h3>
                  <p className="text-gray-600 text-sm">Найдите компаньонов рядом с вами</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Общение</h3>
                  <p className="text-gray-600 text-sm">Чат с другими владельцами</p>
                </div>
              </div>
              
              <Button onClick={() => setShowAuthModal(true)} className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Присоединиться к сообществу
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
      </div>;
  }
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'map':
        return <MapSection />;
      case 'messages':
        return <MessagesSection />;
      case 'planner':
        return <WalkPlanner />;
      default:
        return <ProfileSection />;
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={() => setIsAuthenticated(false)} />
      <main className="pt-20">
        {renderActiveSection()}
      </main>
    </div>;
};
export default Index;