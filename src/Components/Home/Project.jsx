const Project = () => {
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
              src="/assets/colorgamePrj.png"
              alt="Project 1"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">RGB Game</h3>
              <p className="text-gray-600">
                The color game displays an RGB value and several color options.
                Users must match the correct color to the RGB value. The game
                includes multiple levels of difficulty, scoring, and challenges
                to keep users engaged.
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
              src="/assets/ytprj.png"
              alt="Project 2"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">YT To Mp3</h3>
              <p className="text-gray-600">
                A YouTube to MP3 converter project enables users to download the
                audio from a YouTube video as an MP3 file. Users can input the
                video URL and choose audio quality. It can be a desktop app or
                web-based.
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
              src="/assets/passPrj.png"
              alt="Project 3"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Password Generator</h3>
              <p className="text-gray-600">
                A password generator project generates strong passwords with
                options for length, complexity, and character types. It may
                include encryption and multi-factor authentication. It can be a
                web app or standalone tool, and it aims to provide secure
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
  );
};
export default Project;
