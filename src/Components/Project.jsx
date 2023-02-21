const Projects = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/src/assets/colorgamePrj.png"
              alt="Project 1"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">RGB Game</h3>
              <p className="text-gray-600">
                The color game presents the user with an RGB value and several
                color options. The user must select the color that matches the
                RGB value. The game can have multiple levels of difficulty and
                scoring, and may include a timer or other challenges to keep the
                user engaged.
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
              src="/src/assets/ytprj.png"
              alt="Project 2"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">YT To Mp3</h3>
              <p className="text-gray-600">
                A YouTube to MP3 converter project allows users to download the
                audio track from a YouTube video as an MP3 file. The project may
                include a user interface to enter the YouTube video URL and
                choose the desired audio quality. The project can be developed
                as a standalone desktop application or a web-based tool.
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
              src="/src/assets/passPrj.png"
              alt="Project 3"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Password Generator</h3>
              <p className="text-gray-600">
                A password generator project creates strong passwords with
                options for length, complexity, and character types. It may
                include encryption and multi-factor authentication. The project
                can be a web app or standalone tool. Its purpose is to provide
                users with secure passwords for online accounts and data
                protection.
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
  );
};
export default Projects;
