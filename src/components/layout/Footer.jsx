import React from "react";
import LinkedInIcon from "/icon/linkedin.svg";
import EmailIcon from "/icon/email.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[80px] lg:px-[160px] bg-[#F1F0FF] py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-content-center sm:place-items-center ">
        <div className="xl:pr-[18rem] col-span-2">
          <p className="text-sm text-gray-600 mb-4">
            SKIF, in the context of martial arts, stands for Shotokan Karate-do
            International Federation.
          </p>
          <p className="text-sm text-gray-600 mb-4">Imadol, Lalitpur, Nepal</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="LinkedIn">
              <div className="w-6 h-6 text-purple-600">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </a>
            <a href="#" aria-label="Email">
              <div className="w-6 h-6 text-purple-600">
                <img
                  src={EmailIcon}
                  alt="LinkedIn"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-sm text-gray-600 mb-4 ">
            SKIF refers to the Shotokan Karate-Do International Federation, a
            global organization dedicated to the practice and promotion of
            Shotokan karate. Founded in 1978 by Hirokazu Kanazawa, it has grown
            to have affiliated groups in over 130 countries. SKIF emphasizes
            traditional Budo spirit, seeking perfection of character through
            rigorous training and discipline.
          </p>
        </div>
      </div>

      <div className=" pt-6 flex flex-row justify-between items-end flex-wrap gap-4">
        <div className="flex space-x-6 items-end">
          <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
            Privacy policy
          </a>
          <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
            Contact us
          </a>
        </div>
        <span className="text-xs text-gray-600">
          Made with ❤️ by{" "}
          <a
            href="https://dipen-shrestha-portfolio.vercel.app/"
            target="_blank"
            className="!text-xs text-gray-600 hover:text-gray-900 hover:underline"
          >
            DipenShrestha
          </a>
        </span>
        <div className="flex space-x-6 items-center">
          <a href="#" className="text-xs text-gray-600 hover:text-gray-900">
            Site map
          </a>
          <span className="text-xs text-gray-600">@logoipsum</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
