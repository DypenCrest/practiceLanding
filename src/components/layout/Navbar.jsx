import React, { useState } from "react";
import LogoImg from "../../../public/images/shotokanLogo.png";
import { Menu, X } from "lucide-react";
import { NavbarData } from "../../assets/constant";
import { set } from "react-hook-form";

const Navbar = () => {
  //for small screem hamburger nav
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  //this is for scroll smoothly to certain section
  const handleNavScroll = (e, section) => {
    e.preventDefault();
    const targetSection = document.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" fixed top-0 z-50 bg-white w-full px-4 lg:px-[80px] flex items-center justify-between h-[96px]">
      <div className="flex items-center z-50">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            handleScrollTop(e);
            setNavOpen(false);
          }}
          aria-label="Logoipsum Logo"
        >
          <img
            src={LogoImg}
            alt="Logoipsum Logo"
            className="h-10 w-10"
            loading="lazy"
          />
          <span className="text-3xl font-bold midorima">SKIF NEPAL</span>
        </a>
      </div>

      <nav className="hidden lg:flex items-center space-x-4 lg:space-x-8">
        {NavbarData?.map((item, index) => (
          <a
            key={item?.id || index}
            href={item?.path}
            onClick={(e) => handleNavScroll(e, item?.path)}
            className="text-sm font-semibold text-gray-800 hover:text-gray-600"
          >
            {item?.title}
          </a>
        ))}
      </nav>

      {/* <div className="hidden lg:flex items-center space-x-4">
        <a
          href="#"
          className="text-sm font-medium text-[#4532FC] hover:underline"
        >
          Login
        </a>
        <button className="bg-[#4532FC] hover:bg-[#3a3374] text-white rounded-full">
          Request a demo
        </button>
      </div> */}
      <button
        onClick={toggleNav}
        className="lg:hidden block z-50"
        aria-label="Toggle Menu"
      >
        {navOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`fixed inset-0 h-full w-full flex flex-col pt-32 items-center gap-24 bg-white shadow-lg z-[40] transition-all duration-300 ease-in-out transform ${
          navOpen
            ? "translate-x-0  pointer-events-auto"
            : "translate-x-full pointer-events-none"
        } lg:hidden`}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 ">
          {NavbarData?.map((item, index) => (
            <a
              key={item?.id || index}
              href={item?.path}
              onClick={(e) => {
                handleNavScroll(e, item?.path);
                toggleNav();
              }}
              className="text-sm font-semibold text-gray-800 hover:text-gray-600"
            >
              {item?.title}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="#"
            className="!text-xl font-medium text-[#4532FC] hover:underline"
          >
            Login
          </a>
          <button className="bg-[#4532FC] hover:bg-[#3a3374] text-white rounded-full">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
