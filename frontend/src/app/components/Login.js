import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

export default function LoginPage({ onClose, onContinue }) {
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();
    // Continue logic here
    console.log(`Country: ${country}, Phone Number: ${phoneNumber}`);
    // Implement data handling
    onContinue(country, phoneNumber); //this passes the set country and phone number to the finish 
                                      // sign up form
  };


  //Loading animation css and logic
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red; // Customize the color if needed
  `;

  if (isLoading) {
    return (
      <div className="bg-green-500 min-h-screen flex items-center justify-center">
        <RingLoader color="#ffffff" loading={isLoading} css={override} size={150} />
      </div>
    );
  }

  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center">
      <div className="fixed bg-white p-8 bottom-0 rounded-2xl shadow-xl w-full h-5/6">
        {/* Close button */}
        <button
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 28 28"
            stroke="currentColor"
          >
        
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              className="text-gray-500 hover:text-gray-700"
            />
          </svg>
        </button>
        <div className="border-b border-gray-300 pb-4 mb-4 text-center">
          <h2 className="text-2xl text-black font-sans">Sign up</h2>
        </div>

        {/* Login form */}
        <div className="mb-4">
          <select
            id="country"
            className="w-full font-sans border-gray-300 border rounded p-2 px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country/Region</option>
            <option value="FI">Finland</option>
            <option value="SWE">Sweden</option>
            {/* Add more country options here */}
          </select>
        </div>

        <div className="mb-1">
          <input
            type="text"
            id="phone"
            className="w-full font-sans border-gray-300 border rounded px-3 py-2 mt-1 text-black focus:outline-none focus:border-green-500"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Additional text */}
        <p className="text-gray-500 font-sans text-xs mb-4">
          We&apos;ll call or text you to confirm your number. Standard message and data rates apply.
        </p>

        {/* Continue button */}
        <button
          className="bg-green-500 text-white font-semibold py-3 px-6 rounded w-full mb-4"
          onClick={handleContinue}
        >
          Continue
        </button>

        {/* Separator line with "or" text */}
        <div className="flex items-center mb-4">
          <div className="flex-grow bg-gray-300 h-px"></div>
          <span className="mx-4 text-gray-500 font-sans">Or sign in</span>
          <div className="flex-grow bg-gray-300 h-px"></div>
        </div>

        {/* Social login buttons */}
        <div className="flex flex-col gap-4">
        <button type="button" class="text-white w-full bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
        Sign in with Facebook
        </button>
        <button type="button" class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
          <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Sign in with Google
        </button>
        <button type="button" class="text-white w-full bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
           <svg class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
        Sign in with Apple
        </button>
      </div>
    </div>
  </div>
);
}
