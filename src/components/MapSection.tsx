
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MapSection = () => {
  const [searchLocation, setSearchLocation] = useState('');
  
  const nearbyUsers = [
    { id: 1, name: 'Мария', dogName: 'Рекс', breed: 'Немецкая овчарка', distance: '0.3 км', avatar: '👩' },
    { id: 2, name: 'Дмитрий', dogName: 'Луна', breed: 'Хаски', distance: '0.5 км', avatar: '👨' },
    { id: 3, name: 'Елена', dogName: 'Барни', breed: 'Золотистый ретривер', distance: '0.8 км', avatar: '👩‍🦰' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Карта прогулок
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Input
              placeholder="Поиск по адресу или району..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Здесь будет отображаться карта с местоположениями пользователей
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Владельцы собак рядом
              </h3>
              
              {nearbyUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-r from-orange-400 to-blue-400 text-white">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.dogName} • {user.breed}</p>
                        <p className="text-xs text-orange-600">{user.distance} от вас</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full mt-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full"
                    >
                      Пригласить на прогулку
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full">
                Показать больше
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapSection;
