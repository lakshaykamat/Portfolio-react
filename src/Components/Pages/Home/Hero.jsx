import { Link } from "react-router-dom";

const Hero = ({para}) => {
  const RANDOM_IMAGE = "https://source.unsplash.com/random/300×1200/?man"
  const MEN_IMG = "https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              className="w-full rounded md:max-w-lg mx-auto"
              src={MEN_IMG}
              alt="Portrait of Lakshay Kamat"
            />
          </div>
          <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              Lakshay Kamat
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
              {para}
            </p>
            <Link
              to="/projects"
              className="bg-white text-gray-900 py-2 px-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-100"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
