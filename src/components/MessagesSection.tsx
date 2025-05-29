
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const MessagesSection = () => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    { id: 1, name: 'Мария', lastMessage: 'Привет! Как дела у Бобика?', time: '10:30', unread: 2, avatar: '👩' },
    { id: 2, name: 'Дмитрий', lastMessage: 'Завтра идем в парк?', time: '09:15', unread: 0, avatar: '👨' },
    { id: 3, name: 'Елена', lastMessage: 'Спасибо за прогулку!', time: 'Вчера', unread: 1, avatar: '👩‍🦰' },
  ];

  const messages = [
    { id: 1, text: 'Привет! Как дела?', sender: 'other', time: '10:25' },
    { id: 2, text: 'Привет! Все хорошо, Бобик сегодня очень активный', sender: 'me', time: '10:27' },
    { id: 3, text: 'Отлично! А не хочешь сходить на прогулку в парк?', sender: 'other', time: '10:28' },
    { id: 4, text: 'Конечно! В какое время удобно?', sender: 'me', time: '10:29' },
    { id: 5, text: 'Как насчет 16:00?', sender: 'other', time: '10:30' },
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      console.log('Отправка сообщения:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg h-[600px]">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Сообщения
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full pb-6">
          <div className="grid md:grid-cols-3 gap-4 h-full">
            {/* Список чатов */}
            <div className="border-r border-gray-200 pr-4">
              <h3 className="font-semibold text-gray-800 mb-4">Чаты</h3>
              <ScrollArea className="h-full">
                <div className="space-y-2">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedChat === chat.id 
                          ? 'bg-gradient-to-r from-orange-100 to-blue-100 border border-orange-200' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-orange-400 to-blue-400 text-white text-sm">
                            {chat.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium text-gray-800 truncate">{chat.name}</h4>
                            <span className="text-xs text-gray-500">{chat.time}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                            {chat.unread > 0 && (
                              <span className="bg-gradient-to-r from-orange-500 to-blue-500 text-white text-xs rounded-full px-2 py-1 ml-2">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Область сообщений */}
            <div className="md:col-span-2 flex flex-col">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-r from-orange-400 to-blue-400 text-white">
                    👩
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-gray-800">Мария</h4>
                  <p className="text-sm text-green-600">онлайн</p>
                </div>
              </div>

              <ScrollArea className="flex-1 py-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          message.sender === 'me'
                            ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'me' ? 'text-orange-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <Input
                  placeholder="Напишите сообщение..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="rounded-full flex-1"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white rounded-full px-6"
                >
                  Отправить
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesSection;
