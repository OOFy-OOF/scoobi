import { SearchIcon } from "@heroicons/react/20/solid";

export default function SocialSignIn() {
    return (
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Sign in with:</h2>
        <div className="flex justify-center space-x-4">
          <button className="border border-gray-300 bg-white text-gray-500 py-2 px-4 rounded">
            Facebook
          </button>
          <button className="border border-gray-300 bg-white text-gray-500 py-2 px-4 rounded">
            Apple
          </button>
          <button className="border border-gray-300 bg-white text-gray-500 py-2 px-4 rounded">
            Gmail
          </button>
        </div>
      </div>
    );
  }
  