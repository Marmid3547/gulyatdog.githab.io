
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WalkPlanner = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [walkData, setWalkData] = useState({
    title: '',
    time: '',
    duration: '60',
    location: '',
    maxParticipants: '4',
    description: ''
  });

  const plannedWalks = [
    {
      id: 1,
      title: 'Утренняя прогулка в Сокольниках',
      date: '2024-05-30',
      time: '08:00',
      duration: '90 мин',
      location: 'Парк Сокольники',
      participants: 3,
      maxParticipants: 5,
      organizer: 'Анна Петрова',
      status: 'active'
    },
    {
      id: 2,
      title: 'Вечерняя социализация собак',
      date: '2024-05-31',
      time: '19:00',
      duration: '60 мин',
      location: 'Парк Победы',
      participants: 2,
      maxParticipants: 4,
      organizer: 'Мария Иванова',
      status: 'active'
    },
    {
      id: 3,
      title: 'Тренировка послушания',
      date: '2024-06-01',
      time: '10:00',
      duration: '120 мин',
      location: 'Измайловский парк',
      participants: 4,
      maxParticipants: 4,
      organizer: 'Петр Сидоров',
      status: 'full'
    }
  ];

  const handleCreateWalk = () => {
    console.log('Creating walk:', { ...walkData, date: selectedDate });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Создание прогулки */}
        <div className="lg:col-span-1">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Создать прогулку</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="title">Название</Label>
                <Input
                  id="title"
                  value={walkData.title}
                  onChange={(e) => setWalkData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Утренняя прогулка..."
                  className="rounded-full"
                />
              </div>
              
              <div>
                <Label>Дата</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border bg-white"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="time">Время</Label>
                  <Input
                    id="time"
                    type="time"
                    value={walkData.time}
                    onChange={(e) => setWalkData(prev => ({ ...prev, time: e.target.value }))}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Длительность</Label>
                  <Select value={walkData.duration} onValueChange={(value) => setWalkData(prev => ({ ...prev, duration: value }))}>
                    <SelectTrigger className="rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 мин</SelectItem>
                      <SelectItem value="60">60 мин</SelectItem>
                      <SelectItem value="90">90 мин</SelectItem>
                      <SelectItem value="120">120 мин</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Место встречи</Label>
                <Input
                  id="location"
                  value={walkData.location}
                  onChange={(e) => setWalkData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Парк Сокольники..."
                  className="rounded-full"
                />
              </div>
              
              <div>
                <Label htmlFor="maxParticipants">Максимум участников</Label>
                <Select value={walkData.maxParticipants} onValueChange={(value) => setWalkData(prev => ({ ...prev, maxParticipants: value }))}>
                  <SelectTrigger className="rounded-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 участника</SelectItem>
                    <SelectItem value="3">3 участника</SelectItem>
                    <SelectItem value="4">4 участника</SelectItem>
                    <SelectItem value="5">5 участников</SelectItem>
                    <SelectItem value="6">6 участников</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description">Описание</Label>
                <Input
                  id="description"
                  value={walkData.description}
                  onChange={(e) => setWalkData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Описание прогулки..."
                  className="rounded-full"
                />
              </div>
              
              <Button 
                onClick={handleCreateWalk}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full"
              >
                Создать прогулку
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Запланированные прогулки */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Запланированные прогулки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plannedWalks.map((walk) => (
                <div
                  key={walk.id}
                  className="p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{walk.title}</h3>
                      <p className="text-gray-600">Организатор: {walk.organizer}</p>
                    </div>
                    <Badge 
                      className={
                        walk.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }
                    >
                      {walk.status === 'active' ? 'Доступно' : 'Заполнено'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">📅 Дата:</span>
                      <p className="font-medium">{walk.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">⏰ Время:</span>
                      <p className="font-medium">{walk.time}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">⏱️ Длительность:</span>
                      <p className="font-medium">{walk.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">📍 Место:</span>
                      <p className="font-medium">{walk.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        Участников: {walk.participants}/{walk.maxParticipants}
                      </span>
                      <div className="flex -space-x-2">
                        {[...Array(walk.participants)].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                            🐕
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-x-2">
                      {walk.status === 'active' ? (
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full"
                        >
                          Присоединиться
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled className="rounded-full">
                          Место занято
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="rounded-full">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Популярные маршруты */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Популярные маршруты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Сокольники - Большой круг', distance: '3.5 км', difficulty: 'Легкий', time: '45 мин' },
              { name: 'Парк Победы - Аллея', distance: '2.1 км', difficulty: 'Легкий', time: '30 мин' },
              { name: 'Измайловский - Лесная тропа', distance: '4.8 км', difficulty: 'Средний', time: '60 мин' }
            ].map((route, index) => (
              <div key={index} className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-gray-800 mb-2">{route.name}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📏 {route.distance}</p>
                  <p>⭐ {route.difficulty}</p>
                  <p>⏱️ {route.time}</p>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3 rounded-full">
                  Выбрать маршрут
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalkPlanner;
