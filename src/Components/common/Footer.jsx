import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { socialMediaLinks } from "../../assets/socialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold mb-4 md:m-0">Lakshay Kamat</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 flex-wrap justify-center">
            <li className="text-center m-2">
              <a
                href={`mailto:${socialMediaLinks.mail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaEnvelope className="inline-block mr-1" />
                Email
              </a>
            </li>
            <li className="text-center m-2">
              <a
                href={`tel:${socialMediaLinks.tel}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaPhoneAlt className="inline-block mr-1" />
                Phone
              </a>
            </li>
            <li className="text-center m-2">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiGithub className="inline-block mr-1" />
                Github
              </a>
            </li>
            <li className="text-center m-2">
              <a
                href={socialMediaLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiLinkedin className="inline-block mr-1" />
                LinkedIn
              </a>
            </li>
            <li className="text-center m-2">
              <a
                href={socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FiTwitter className="inline-block mr-1" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;