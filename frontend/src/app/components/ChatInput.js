import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ChatInput = () => {
  const [messageText, setMessageText] = useState('');

  // Capture chat input
  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSendMessage = () => {
    // Perform message handling here
    console.log('Sent message:', messageText);
    setMessageText('');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center py-2 px-4">
      <div className="relative flex items-center rounded-full font-sans text-black shadow-md">

        <input
          type="text"
          placeholder="Type a message..."
          value={messageText}
          onChange={handleInputChange}
          className="py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <button
          className="absolute right-1 bg-green-500 text-white rounded-full p-2"
          onClick={handleSendMessage}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
