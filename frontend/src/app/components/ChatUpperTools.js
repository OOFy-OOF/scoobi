import { FaArrowLeft } from 'react-icons/fa';

const UpperTools = ({ recipient, onClick }) => {
  const handleClick = () => {
    // Perform search logic here
    onClick();
  };

  return (
    <div className="fixed top-1 left-0 right-0 flex w-full justify-center py-4 px-4">
      <div className="relative flex items-center w-full max-w-screen-md mx-auto font-sans text-black shadow-md">
        <button
          className="absolute left-0 flex items-center justify-center bg-green-500 text-white rounded-full p-2 shadow-md"
          onClick={handleClick}
        >
          <FaArrowLeft className="text-lg" />
        </button>
        <h2 className="absolute right-5 text-lg font-sans text-black">{recipient}</h2>
      </div>
    </div>
  );
};

export default UpperTools;
