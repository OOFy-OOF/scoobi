//Logic for testing the page locally 

"use client"
import { useState } from 'react';
import LoginPage from '../components/Login';
import FinishSignUpPage from '../components/Register';
import BikesPage from '../components/BikesPage';
import Toolbar from '../components/Toolbar';
import Searchbar from '../components/Searchbar';
import Chat from '../components/Chat';
import ChatScreen from '../components/ChatScreen';
import FilterPage from '../components/Filters';
import GaragePage from '../components/Garage';
import GarageInputPage from '../components/GarageInput';
import BikeSpecificPage from '../components/BikeSpecific';

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showFinishSignUpPage, setShowFinishSignUpPage] = useState(false);
  const [showBikesPage, setShowBikesPage] = useState(true);
  const [showBikeSpecific, setShowBikeSpecific] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showChatSpecific, setShowChatSpecific] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showGarage, setShowGarage] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bike, setBike] = useState('');
  const [chat, setChat] = useState('');
  const [activeTool, setActiveTool] = useState('search');

  const handleOpenLoginForm = () => {
    setShowLoginForm(true);
    setShowBikesPage(false);
    setShowChat(false);
    setShowFinishSignUpPage(false);
    setShowGarage(false);
  };

  const handleContinue = (country, phoneNumber) => {
    setCountry(country);
    setPhoneNumber(phoneNumber);
    setShowFinishSignUpPage(true);
    setShowLoginForm(false);
  };

  const handleCloseFinishSignUpPage = () => {
    setShowFinishSignUpPage(false);
    setShowLoginForm(true);
    setCountry('');
    setPhoneNumber('');
  };

  const handleCloseLoginPage = () => {
    setShowLoginForm(false);
    setShowBikesPage(true);
    setActiveTool('search');
  };

  const handleBikesPage = () => {
    setShowBikesPage(true);
    setShowChat(false);
    setShowGarage(false);
    setActiveTool('search');
  };

  const handleOpenChat = () => {
    setShowChat(true);
    setShowBikesPage(false);
    setShowChatSpecific(false);
  };

  const handleOpenChatSpecific = (chat) => {
    setChat(chat);
    setShowChatSpecific(true);
    setShowChat(false);
  };

  const handleShowFilters = () => {
    setShowSort(!showSort);
  };

  const handleOpenGarage = () => {
    setShowGarage(true);
    
  };

  const handleShowInput = () => { //input for adding a new bike
    setShowInput(!showInput);
  };

  const handleShowBikeSpecific = (bike) => {
    setBike(bike); //set the bike object to be opened
    setShowBikeSpecific(!showBikeSpecific);
    setShowBikesPage(!showBikesPage);
  }

  return (
    <div className="relative w-full bg-white">
      {showLoginForm && !showBikesPage && !showFinishSignUpPage && !showChat && !showChatSpecific && !showGarage && (
        <div className="bg-white rounded-2xl w-full transform transition-transform duration-1000 ease-out -translate-y-0 slide-up">
          <LoginPage onContinue={handleContinue} onClose={handleCloseLoginPage} />
        </div>
      )}

      {showFinishSignUpPage && !showBikesPage && !showChat && !showChatSpecific && !showGarage && (
        <div className="bg-white rounded-2xl w-full transform transition-transform duration-1000 ease-out -translate-y-0 slide-up">
          <FinishSignUpPage
            country={country}
            phoneNumber={phoneNumber}
            onClose={handleCloseFinishSignUpPage}
            onSubmit={handleBikesPage}
          />
        </div>
      )}

      {showBikesPage && !showChat && !showChatSpecific && !showGarage && (
        <div className="bg-white min-h-screen flex w-full items-center justify-center">
          <BikesPage openBike={handleShowBikeSpecific}/>
          <Searchbar onSort={handleShowFilters} />
          <Toolbar
            activeTool={activeTool}
            setActiveTool={setActiveTool}
            onScoob={handleOpenLoginForm}
            onChat={handleOpenChat}
            onSearch={handleBikesPage}
            onGarage={handleOpenGarage}
          />
          {showSort && <FilterPage onClose={handleShowFilters} />}
        </div>
      )}

      {showChat && !showChatSpecific && !showGarage && (
        <div className="bg-white flex w-full h-full items-center justify-center">
          <Chat onOpen={handleOpenChatSpecific} />
          <Toolbar
            activeTool={activeTool}
            setActiveTool={setActiveTool}
            onScoob={handleOpenLoginForm}
            onChat={handleOpenChat}
            onSearch={handleBikesPage}
            onGarage={handleOpenGarage}
          />
        </div>
      )}

      {showChatSpecific && !showGarage && (
        <div className="bg-white min-h-screen flex w-full items-center justify-center">
          <ChatScreen onClose={handleOpenChat} chat={chat}/>
        </div>
      )}

      {showGarage && (
        <div className="bg-white min-h-screen flex w-full items-center justify-center">
          <GaragePage showInput={handleShowInput} />
          <Toolbar
            activeTool={activeTool}
            setActiveTool={setActiveTool}
            onScoob={handleOpenLoginForm}
            onChat={handleOpenChat}
            onSearch={handleBikesPage}
            onGarage={handleOpenGarage}
          />
          {showInput && <GarageInputPage onClose={handleShowInput} />}
        </div>
      )}
      {showBikeSpecific && (
        <div className="bg-white min-h-screen flex w-full items-center justify-center">
          <BikeSpecificPage onClose={handleShowBikeSpecific} bike={bike}/>
        </div>
      )}
    </div>
  );
}
