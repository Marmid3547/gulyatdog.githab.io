
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const ProfileSection = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Анна Петрова',
    email: 'anna@example.com',
    location: 'Москва, Сокольники',
    bio: 'Люблю долгие прогулки с моим лабрадором Максом!'
  });

  const [dogProfile, setDogProfile] = useState({
    name: 'Макс',
    breed: 'Лабрадор',
    age: '3 года',
    size: 'Крупная',
    temperament: 'Дружелюбный',
    vaccinated: true,
    friendly: true
  });

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Профиль пользователя */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 border-4 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-white text-gray-800 text-xl">АП</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">Мой профиль</h3>
                <p className="text-orange-100">Владелец собаки</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                value={userProfile.name}
                onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={userProfile.email}
                onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <div>
              <Label htmlFor="location">Местоположение</Label>
              <Input
                id="location"
                value={userProfile.location}
                onChange={(e) => setUserProfile(prev => ({ ...prev, location: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <div>
              <Label htmlFor="bio">О себе</Label>
              <Input
                id="bio"
                value={userProfile.bio}
                onChange={(e) => setUserProfile(prev => ({ ...prev, bio: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full">
              Сохранить профиль
            </Button>
          </CardContent>
        </Card>

        {/* Профиль собаки */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-3xl">🐕</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Профиль собаки</h3>
                <p className="text-blue-100">Ваш питомец</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="dogName">Кличка</Label>
              <Input
                id="dogName"
                value={dogProfile.name}
                onChange={(e) => setDogProfile(prev => ({ ...prev, name: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <div>
              <Label htmlFor="breed">Порода</Label>
              <Input
                id="breed"
                value={dogProfile.breed}
                onChange={(e) => setDogProfile(prev => ({ ...prev, breed: e.target.value }))}
                className="rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Возраст</Label>
                <Input
                  id="age"
                  value={dogProfile.age}
                  onChange={(e) => setDogProfile(prev => ({ ...prev, age: e.target.value }))}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="size">Размер</Label>
                <Input
                  id="size"
                  value={dogProfile.size}
                  onChange={(e) => setDogProfile(prev => ({ ...prev, size: e.target.value }))}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <Label>Характер</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  {dogProfile.temperament}
                </Badge>
                {dogProfile.vaccinated && (
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Привит
                  </Badge>
                )}
                {dogProfile.friendly && (
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Дружелюбный
                  </Badge>
                )}
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full">
              Сохранить профиль собаки
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Статистика */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Статистика прогулок
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">45</div>
              <div className="text-gray-600">Прогулок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">12</div>
              <div className="text-gray-600">Друзей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">8</div>
              <div className="text-gray-600">Маршрутов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">156</div>
              <div className="text-gray-600">км пройдено</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
