import { FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
const para = "Hello, my name is Lakshay Kamat, and I am a web developer with three years of experience in the field. I have worked with many different languages, including React, Node.js, Django, and Angular. Additionally, I have experience working as a backend developer. I have a strong understanding of programming concepts, including data structures and algorithms, object-oriented programming, and SQL."
function ResumeCV() {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="m-auto md:m-auto max-w-xl container px-4 mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Resume &amp; CV</h2>
        <div className="m-2 md:m-0">
          <p>{para}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-x-8 lg:space-y-0 m-2">
          <a href="/resume.pdf" download className="flex items-center bg-white py-3 px-6 rounded-lg shadow-lg text-gray-700 hover:bg-gray-900 hover:text-white hover:font-medium transition-colors duration-300 ease-in-out">
            <span className="mr-2"><FaFilePdf /></span>
            <span>Download Resume</span>
          </a>
          <a href="/cv.pdf" download className="flex items-center bg-white py-3 px-6 rounded-lg shadow-lg text-gray-700 hover:bg-gray-900 hover:text-white hover:font-medium transition-colors duration-300 ease-in-out">
            <span className="mr-2"><FaFilePdf /></span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default ResumeCV