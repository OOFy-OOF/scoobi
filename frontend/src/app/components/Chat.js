import React from 'react';
import Image from 'next/image';

const Chat = ( {onOpen} ) => {
    //dummy chats for testing, profilePicture and latest message not necessary
  const chats = [
    { id: 1, recipient: 'John Doe', message: 'Hello', profilePicture: require('../images/bike2.jpeg') },
    { id: 2, recipient: 'Jane Smith', message: 'Hi there', profilePicture: require('../images/bike2.jpeg') },
    { id: 3, recipient: 'Alice Johnson', message: 'Hey!', profilePicture: require('../images/bike2.jpeg') },
  ];

  const openChat = (chat) => {
    // Logic to open the chat with the specific chatId
    onOpen(chat);
  };

  return (
    <div className="absolute bg-white w-full top-0 min-h-screen">
      <h1 className="text-2xl text-black font-sans font-bold">Chats</h1>
      <div className="w-full">
        {chats.map((chat, index) => (
          <div key={chat.id}>
            <button
              className={`w-full bg-white p-4 rounded-lg flex items-center ${index !== chats.length - 1 ? 'mb-2' : ''}`}
              onClick={() => openChat(chat)}
            >
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <Image src={chat.profilePicture} alt="Profile"/>
                </div>
                <div className="ml-2">
                  <h2 className="text-lg font-sans text-black">{chat.recipient}</h2>
                  <p>{chat.message}</p>
                </div>
              </div>
            </button>
            {index !== chats.length - 1 && <hr className="my-2 border-gray-300" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
