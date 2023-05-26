import React from 'react';
import ChatInput from './ChatInput';
import UpperTools from './ChatUpperTools';

const ChatScreen = ({ chat, onClose }) => {
  //dummy messages for testing
  //chat is a unique id for a user's chat 
  const messages = [
    { id: 1, sender: 'John Doe', content: 'Hello', timestamp: '10:00 AM', chat_id: 1},
    { id: 2, sender: 'You', content: 'Hi there', timestamp: '10:05 AM', chat_id: 1},
    { id: 3, sender: 'John Doe', content: 'How are you?', timestamp: '10:10 AM', chat_id: 1},
    { id: 1, sender: 'Jane Smith', content: 'He', timestamp: '10:00 AM', chat_id: 2},
    { id: 2, sender: 'You', content: 'Hi e', timestamp: '10:05 AM', chat_id: 2},
    { id: 3, sender: 'Jane Smith', content: 'How ', timestamp: '10:10 AM', chat_id: 2}
  ]

  //filter messages by chat_id, hopefully done with sql though
  const filteredMessages = messages.filter((message) => message.chat_id === chat.id);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center py-2 px-4">
        <UpperTools recipient={filteredMessages.sender} onClick={onClose} />
      </div>
      <div className="flex-grow">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start justify-${message.sender === 'You' ? 'end' : 'start'} py-2 px-4`}
          >
            <div
              className={`rounded-lg p-2 max-w-2/3 ${
                message.sender === 'You' ? 'bg-green-500 text-white ml-auto' : 'bg-gray-300 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-500">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatScreen;
