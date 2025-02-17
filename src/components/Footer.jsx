import React from 'react';
import insta from "../assets/images/icon-logo-instagram.png";
import linkedin from "../assets/images/icon-logo-linkedin.png";
import github from "../assets/images/github.png";
import twitter from "../assets/images/11053969_x_logo_twitter_new_brand_icon.png";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-4">
      <p className="text-center mb-4">
        © 2025 by Mahesh Bandlamudi | 
        <a href="mailto:maheshbandlamudi7@gmail.com" className="text-blue-400 hover:underline">
          maheshbandlamudi7@gmail.com
        </a>
      </p>

      <ul className="flex justify-center space-x-4">
        <li>
          <a href="https://x.com/Mahesh_ABCD" target="_blank">
            <img
              src={twitter}
              alt="My X handle"
              className="w-6 h-6"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/maheshbandlamudi" target="_blank">
            <img
              src={github}
              alt="My GitHub profile"
              className="w-6 h-6"
            />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/maheshbandlamudi7" target="_blank">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="w-6 h-6"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mahesh.bandlamudi_._/profilecard/"
            target="_blank"
          >
            <img
              src={insta}
              alt="My Instagram"
              className="w-6 h-6"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;