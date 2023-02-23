import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I am a skilled web developer with over 5 years of experience in
              building high-quality websites and applications. I have a
              background in computer science and a passion for learning and
              implementing the latest web technologies.
            </p>
            <div className="mt-8 flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Education
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Bachelor's Degree in Computer Application from YMCA University
                </p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <GiTrophyCup className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Achievements
                </h3>
                <ul className="mt-2 text-base text-gray-500 list-disc list-inside">
                  <li>Won 1st prize in the Web Development competition</li>
                  <li>Published an article in a popular tech magazine</li>
                  <li>3 Star Coder at Codechef</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              width={500}
              height={500}
              className="rounded-lg m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
