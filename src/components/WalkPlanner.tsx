
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const WalkPlanner = () => {
  const [walkPlan, setWalkPlan] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    duration: '',
    difficulty: '',
    description: '',
    maxParticipants: ''
  });

  const [plannedWalks, setPlannedWalks] = useState([
    {
      id: 1,
      title: 'Утренняя прогулка в парке',
      date: '2024-01-15',
      time: '08:00',
      location: 'Парк Сокольники',
      participants: 3,
      maxParticipants: 5,
      difficulty: 'Легкая'
    },
    {
      id: 2,
      title: 'Вечерняя прогулка по набережной',
      date: '2024-01-16',
      time: '18:00',
      location: 'Воробьевы горы',
      participants: 2,
      maxParticipants: 4,
      difficulty: 'Средняя'
    }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setWalkPlan(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const createWalk = () => {
    if (walkPlan.title && walkPlan.date && walkPlan.time && walkPlan.location) {
      const newWalk = {
        id: plannedWalks.length + 1,
        ...walkPlan,
        participants: 1,
        maxParticipants: parseInt(walkPlan.maxParticipants) || 5
      };
      setPlannedWalks([...plannedWalks, newWalk]);
      setWalkPlan({
        title: '',
        date: '',
        time: '',
        location: '',
        duration: '',
        difficulty: '',
        description: '',
        maxParticipants: ''
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Форма создания прогулки */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Планировщик прогулок
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Название прогулки</Label>
              <Input
                id="title"
                placeholder="Например: Утренняя прогулка в парке"
                value={walkPlan.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="rounded-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Дата</Label>
                <Input
                  id="date"
                  type="date"
                  value={walkPlan.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="time">Время</Label>
                <Input
                  id="time"
                  type="time"
                  value={walkPlan.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="rounded-full"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Место встречи</Label>
              <Input
                id="location"
                placeholder="Адрес или название места"
                value={walkPlan.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="rounded-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="duration">Продолжительность</Label>
                <Select onValueChange={(value) => handleInputChange('duration', value)}>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30min">30 минут</SelectItem>
                    <SelectItem value="1hour">1 час</SelectItem>
                    <SelectItem value="1.5hours">1.5 часа</SelectItem>
                    <SelectItem value="2hours">2 часа</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="difficulty">Сложность</Label>
                <Select onValueChange={(value) => handleInputChange('difficulty', value)}>
                  <SelectTrigger className="rounded-full">
                    <SelectValue placeholder="Уровень активности" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Легкая</SelectItem>
                    <SelectItem value="medium">Средняя</SelectItem>
                    <SelectItem value="hard">Активная</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="maxParticipants">Максимум участников</Label>
              <Input
                id="maxParticipants"
                type="number"
                placeholder="5"
                min="2"
                max="20"
                value={walkPlan.maxParticipants}
                onChange={(e) => handleInputChange('maxParticipants', e.target.value)}
                className="rounded-full"
              />
            </div>

            <div>
              <Label htmlFor="description">Описание (необязательно)</Label>
              <Textarea
                id="description"
                placeholder="Дополнительная информация о прогулке..."
                value={walkPlan.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="rounded-lg"
              />
            </div>

            <Button 
              onClick={createWalk}
              className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full py-3"
            >
              Создать прогулку
            </Button>
          </CardContent>
        </Card>

        {/* Список запланированных прогулок */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Запланированные прогулки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {plannedWalks.map((walk) => (
                <Card key={walk.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-800">{walk.title}</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {walk.difficulty}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <span>📅</span> {walk.date} в {walk.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span> {walk.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>👥</span> {walk.participants}/{walk.maxParticipants} участников
                      </p>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full"
                      >
                        Присоединиться
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="rounded-full"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {plannedWalks.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-4">🚶‍♀️</div>
                  <p>Пока нет запланированных прогулок</p>
                  <p className="text-sm">Создайте первую прогулку!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalkPlanner;
