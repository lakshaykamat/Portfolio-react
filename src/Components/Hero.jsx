const Hero = () => {
  return (
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
  );
};
export default Hero;
