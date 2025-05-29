
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const MessagesSection = () => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Мария Иванова',
      dogName: 'Белла',
      lastMessage: 'Привет! Как дела у Макса?',
      timestamp: '10:30',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Петр Сидоров',
      dogName: 'Рекс',
      lastMessage: 'Отличная прогулка была сегодня!',
      timestamp: '09:15',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Елена Козлова',
      dogName: 'Луна',
      lastMessage: 'Увидимся завтра в парке?',
      timestamp: 'Вчера',
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: 'Мария Иванова',
      content: 'Привет! Как дела у Макса?',
      timestamp: '10:30',
      isOwn: false
    },
    {
      id: 2,
      senderId: 0,
      senderName: 'Вы',
      content: 'Привет, Мария! У Макса все отлично, он очень активный сегодня 🐕',
      timestamp: '10:32',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'Мария Иванова',
      content: 'Замечательно! Белла тоже в прекрасном настроении. Может, встретимся на прогулку?',
      timestamp: '10:35',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Список чатов */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Сообщения
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-full">
              <div className="space-y-2 p-4">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedChat?.id === conversation.id
                        ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedChat(conversation)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-gradient-to-r from-purple-400 to-blue-400 text-white">
                            {conversation.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 truncate">{conversation.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.dogName}</p>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Чат */}
        <div className="lg:col-span-2">
          {selectedChat ? (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-white text-gray-800">
                      {selectedChat.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{selectedChat.name}</h3>
                    <p className="text-purple-100 text-sm">с {selectedChat.dogName}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                            message.isOwn
                              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.isOwn ? 'text-purple-100' : 'text-gray-500'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Введите сообщение..."
                      className="flex-1 rounded-full"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-6"
                    >
                      Отправить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Выберите чат</h3>
                <p className="text-gray-500">Выберите собеседника из списка, чтобы начать общение</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
