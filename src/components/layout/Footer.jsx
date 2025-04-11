import React from "react";
import LinkedInIcon from "/icon/linkedin.svg";
import EmailIcon from "/icon/email.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[80px] lg:px-[160px] bg-[#F1F0FF] py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-content-center sm:place-items-center ">
        <div className="xl:pr-[18rem] col-span-2">
          <p className="text-sm text-gray-600 mb-4">
            Curabitur consequat, purus a scelerisque sagittis, nulla metus
            tincidunt elit, vel venenatis nulla libero nec nulla. Suspendisse
            potenti. Aenean a justo vel sapien pellentesque tincidunt. Sed
            luctus, elit ac interdum convallis, ligula libero egestas orci, at
            auctor felis ligula nec odio.
          </p>
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
                <img src={EmailIcon} alt="LinkedIn" className="w-full h-full" loading="lazy" />
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="">
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Invoice Factoring
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Invoice finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Supplier finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Customer finance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Frequently asked questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Knowledge base
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  API documentation
                </a>
              </li>
            </ul>
          </div>
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
