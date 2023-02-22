import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="text-white font-bold text-xl">Lakshay</div>
          <div className="flex md:hidden absolute right-5 top-5">
            <button
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex md:flex-row md:items-center ${
              isOpen ? "flex flex-col" : "hidden"
            }`}
          >
            <a
              href="#"
              className="text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            >
              Follow
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white md:mx-4 my-2 md:my-0 text-center block md:inline-block px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
