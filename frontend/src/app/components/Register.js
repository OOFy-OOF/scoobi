import { useState } from 'react';

export default function FinishSignUpPage({ country, phoneNumber, onSubmit, onClose}) {
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    console.log('Country:', country);
    console.log('Phone Number:', phoneNumber);
    console.log('Birthday:', birthday);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  //Change password to visible or non-visible
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center">
      <div className="fixed bg-white p-8 rounded-2xl bottom-0 w-full h-auto">
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
          <h2 className="text-2xl font-sans text-black">Finish signing up</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country" className="block">
              Country/Region
            </label>
            <select
            id="country"
            className="w-full border-gray-300 border rounded py-4 focus:outline-none focus:border-green-500"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country/Region</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            {/* Add more country options here */}
          </select>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block">
              Phone Number
            </label>
            <input
            type="text"
            id="phone"
            className="w-full font-sans border-gray-300 border text-black rounded py-2 focus:outline-none focus:border-green-500"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p className='text-gray-500 text-xs font-sans'>
            Make sure it matches the name on your government ID.
          </p>
          </div>

          <div>
            <label htmlFor="birthday" className="block">
              Birthday
            </label>
            <input
              type="text"
              id="birthday"
              className="w-full border-gray-300 font-sans text-black border py-2 rounded focus:outline-none focus:border-green-500"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Birthday (mm/dd/yy)"
            />
            <p className="text-gray-500 text-xs font-sans">
              To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Scooby.
            </p>
          </div>

          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full font-sans text-black border-gray-300 border rounded py-2 focus:outline-none focus:border-green-500"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-gray-500 text-xs font-sans">
              Add some text later
            </p>
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full border-gray-300 border text-black font-sans rounded py-2 focus:outline-none focus:border-green-500"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='absolute right-10 bottom-21 bg-white text-gray-500 font-sans'
                    onClick={toggleShowPassword}
                    >
            Show
            </button>
          </div>

          <button
            className="bg-black text-white font-semibold py-2 rounded w-full"
            type="submit" method="POST" onClick={onSubmit}
          >
            Agree and Continue
          </button>
        </form>
      </div>
    </div>
  );
}
