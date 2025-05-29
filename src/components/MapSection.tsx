
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const MapSection = () => {
  const [searchRadius, setSearchRadius] = useState('2');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const nearbyUsers = [
    {
      id: 1,
      name: 'Мария Иванова',
      dogName: 'Белла',
      breed: 'Хаски',
      distance: '0.5 км',
      available: true,
      lastSeen: '5 мин назад',
      location: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 2,
      name: 'Петр Сидоров',
      dogName: 'Рекс',
      breed: 'Немецкая овчарка',
      distance: '1.2 км',
      available: true,
      lastSeen: '15 мин назад',
      location: { lat: 55.7489, lng: 37.6134 }
    },
    {
      id: 3,
      name: 'Елена Козлова',
      dogName: 'Луна',
      breed: 'Золотистый ретривер',
      distance: '1.8 км',
      available: false,
      lastSeen: '1 час назад',
      location: { lat: 55.7425, lng: 37.6156 }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Карта (имитация) */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-2xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                  Карта компаньонов
                </span>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    value={searchRadius}
                    onChange={(e) => setSearchRadius(e.target.value)}
                    className="w-20 rounded-full"
                    min="1"
                    max="10"
                  />
                  <span className="text-sm text-gray-600">км</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 h-96 rounded-xl relative overflow-hidden">
                {/* Имитация карты */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">Интерактивная карта</p>
                    <p className="text-sm text-gray-500">Здесь будет отображаться карта с местоположением пользователей</p>
                  </div>
                </div>
                
                {/* Маркеры пользователей */}
                {nearbyUsers.map((user, index) => (
                  <div
                    key={user.id}
                    className={`absolute w-8 h-8 rounded-full border-4 border-white shadow-lg cursor-pointer transform hover:scale-110 transition-all duration-300 ${
                      user.available ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                    style={{
                      top: `${20 + index * 25}%`,
                      left: `${30 + index * 20}%`
                    }}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs">
                      🐕
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex space-x-2">
                <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full">
                  Найти компаньонов
                </Button>
                <Button variant="outline" className="rounded-full">
                  Создать маршрут
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Список пользователей */}
        <div className="space-y-4">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Компаньоны рядом
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {nearbyUsers.map((user) => (
                <div
                  key={user.id}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedUser?.id === user.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-r from-orange-400 to-blue-400 text-white">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">{user.name}</h4>
                        <Badge className={user.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                          {user.available ? 'Онлайн' : 'Офлайн'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{user.dogName} • {user.breed}</p>
                      <p className="text-xs text-gray-500">{user.distance} • {user.lastSeen}</p>
                    </div>
                  </div>
                  
                  {selectedUser?.id === user.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                      <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full">
                        Пригласить на прогулку
                      </Button>
                      <Button size="sm" variant="outline" className="w-full rounded-full">
                        Отправить сообщение
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full rounded-full text-left justify-start">
                🎯 Найти по породе
              </Button>
              <Button variant="outline" className="w-full rounded-full text-left justify-start">
                ⏰ Запланировать прогулку
              </Button>
              <Button variant="outline" className="w-full rounded-full text-left justify-start">
                🏃‍♀️ Найти группу для бега
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
