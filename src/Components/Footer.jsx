import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
    const socialMediaLinks = {
        twitter:"https://twitter.com/Lakshaykamat",
        github:"https://github.com/lakshaykamat/",
        facebook:"https://www.facebook.com/Thelakshaykamat",
        instagram:"https://www.instagram.com/lakshaykamat.exe/",
        skype:"https://join.skype.com/invite/uFs3pAV4xUMG",
        linkedIn:"https://www.linkedin.com/in/lakshaykamat/",
        mail:"lakshaykamat2048@gmail.com",
        tel:"+919958125355"
    }
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold">Lakshay Kamat</h3>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li>
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
            <li>
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
            <li>
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
            <li>
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
            <li>
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