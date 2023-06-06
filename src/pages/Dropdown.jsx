import React, { useState } from 'react';

export default function DropdownComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <div className="inline-flex bg-amber-200 border rounded-md">
      <a
        href="#"
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        MyLeggerz
      </a>

      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-amber-200 border border-gray-100 rounded-md shadow-lg">
            <div className="p-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black rounded-lg hover:bg-gray-200 hover:text-gray-700"
              >
                My orders
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black rounded-lg hover:bg-gray-200 hover:text-gray-700"
              >
                Rewards
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black rounded-lg hover:bg-gray-200 hover:text-gray-700"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
