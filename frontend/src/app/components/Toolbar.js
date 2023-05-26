import { FaSearch, FaBicycle, FaEnvelope, FaMap } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

export default function Toolbar({ activeTool, setActiveTool, onScoob, onChat, onSearch, onGarage }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  //Toolbar disappears when user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  //Toolbar tools
  const tools = [
    { id: 'search', label: 'Find', icon: FaSearch },
    { id: 'garage', label: 'Garage', icon: FaBicycle },
    { id: 'myScoobi', label: 'My Scoobi' },
    { id: 'chat', label: 'Chat', icon: FaEnvelope },
    { id: 'map', label: 'Map', icon: FaMap },
  ];

  const handleTools = (toolId) => {
    if (toolId === 'myScoobi') {  //Currently this opens the login page...needs logic for checking login status
      setActiveTool(toolId);
      onScoob();
    } else if (toolId === 'chat') { //If chat is selected, open chat page
      setActiveTool(toolId);
      onChat();
    } else if (toolId === 'search') { //If search is selected open the bike page
      setActiveTool(toolId); 
      onSearch();
    } else if (toolId === 'garage') { //If garage is selected open the page for submitting new bikes
        setActiveTool(toolId);        //Also show existing bikes for rent
        onGarage();                    
    }
        else {
      setActiveTool(toolId);
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white flex justify-between py-3 px-4 border-t border-gray-300 ${
        visible ? '' : 'hidden'
      }`}
    >
      {tools.map((tool) => (
        <button
          key={tool.id}
          className={`flex flex-col items-center justify-center focus:outline-none font-sans text-xs ${
            activeTool === tool.id ? 'text-green-500' : 'text-gray-500'
          }`}
          onClick={() => handleTools(tool.id)}
        >
          {tool.icon && (
            <div className={`mb-1 ${activeTool === tool.id ? 'text-green-500 text-xl' : 'text-gray-500'}`}>
              <tool.icon />
            </div>
          )}
          <span>{tool.label}</span>
        </button>
      ))}
    </div>
  );
}
