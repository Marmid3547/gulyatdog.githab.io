
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileSection = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Анна Петрова',
    location: 'Москва, Россия',
    dogName: 'Бобик',
    dogBreed: 'Лабрадор',
    dogAge: '3 года'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Мой профиль
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-32 h-32">
              <AvatarImage src="/placeholder.svg" alt="Профиль" />
              <AvatarFallback className="text-2xl bg-gradient-to-r from-orange-400 to-blue-400 text-white">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя владельца</Label>
                    <Input
                      id="name"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Местоположение</Label>
                    <Input
                      id="location"
                      value={userProfile.location}
                      onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
                      className="rounded-full"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
                  <p className="text-gray-600">{userProfile.location}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  🐕 Информация о питомце
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isEditing ? (
                  <>
                    <div>
                      <Label htmlFor="dogName">Кличка</Label>
                      <Input
                        id="dogName"
                        value={userProfile.dogName}
                        onChange={(e) => setUserProfile({...userProfile, dogName: e.target.value})}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dogBreed">Порода</Label>
                      <Input
                        id="dogBreed"
                        value={userProfile.dogBreed}
                        onChange={(e) => setUserProfile({...userProfile, dogBreed: e.target.value})}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dogAge">Возраст</Label>
                      <Input
                        id="dogAge"
                        value={userProfile.dogAge}
                        onChange={(e) => setUserProfile({...userProfile, dogAge: e.target.value})}
                        className="rounded-full"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p><strong>Кличка:</strong> {userProfile.dogName}</p>
                    <p><strong>Порода:</strong> {userProfile.dogBreed}</p>
                    <p><strong>Возраст:</strong> {userProfile.dogAge}</p>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="border border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  📊 Статистика прогулок
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p><strong>Прогулок в этом месяце:</strong> 15</p>
                <p><strong>Новых друзей:</strong> 3</p>
                <p><strong>Любимый маршрут:</strong> Парк Сокольники</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            {isEditing ? (
              <>
                <Button 
                  onClick={() => setIsEditing(false)}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-6"
                >
                  Сохранить
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                  className="rounded-full px-6"
                >
                  Отмена
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full px-6"
              >
                Редактировать профиль
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
