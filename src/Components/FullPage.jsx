const FullPage = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            {/* <img className="w-10 h-10 rounded-full mr-3 sm:h-9" src="/src/assets/Snapchat-606761658.jpg" alt="Rounded avatar"></img> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Lakshay
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Follow
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Section */}
      <section className="bg-gray-900">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <img
                className="w-full rounded md:max-w-lg mx-auto"
                src="https://source.unsplash.com/random/300×300/?man"
                alt="Portrait of Lakshay Kamat"
              />
            </div>
            <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Lakshay Kamat
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                I'm a web developer with a passion for creating beautiful and
                functional websites. I specialize in front-end development and
                have experience with a variety of technologies including HTML,
                CSS, JavaScript, and React.
              </p>
              <a
                href="#"
                className="bg-white text-gray-900 py-2 px-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-100"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="bg-gray-100 py-16" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://i.postimg.cc/h4ZJ30BD/colorgame-Prj.png"
                alt="Project 1"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">RGB Game</h3>
                <p className="text-gray-600">
                  The color game displays an RGB value and several color
                  options. Users must match the correct color to the RGB value.
                  The game includes multiple levels of difficulty, scoring, and
                  challenges to keep users engaged.
                </p>
                <a
                  href="https://lakshaykamat.github.io/colorGame/"
                  className="block mt-4 text-sm font-bold text-gray-800 hover:text-gray-700 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://i.postimg.cc/PqHN83m4/ytprj.png"
                alt="Project 2"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">YT To Mp3</h3>
                <p className="text-gray-600">
                  A YouTube to MP3 converter project enables users to download
                  the audio from a YouTube video as an MP3 file. Users can input
                  the video URL and choose audio quality. It can be a desktop
                  app or web-based.
                </p>
                <a
                  href="https://lakshaykamat.github.io/linktree/js-project/youtube-mp3/docs/index.html"
                  className="block mt-4 text-sm font-bold text-gray-800 hover:text-gray-700 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://i.postimg.cc/qvyzqVCq/passPrj.png"
                alt="Project 3"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Password Generator</h3>
                <p className="text-gray-600">
                  A password generator project generates strong passwords with
                  options for length, complexity, and character types. It may
                  include encryption and multi-factor authentication. It can be
                  a web app or standalone tool, and it aims to provide secure
                  passwords for online accounts and data protection.
                </p>
                <a
                  href="https://lakshaykamat.github.io/linktree/js-project/password-generator/docs/index.html"
                  className="block mt-4 text-sm font-bold text-gray-800 hover:text-gray-700 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FullPage;
