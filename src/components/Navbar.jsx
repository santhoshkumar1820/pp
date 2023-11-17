import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { pplogo } from "../assets";
import { Link } from "react-scroll";
import "./home/Home1.css"
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleNavLinkClick = (id) => {
    setActiveLink(id);
    
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full fixed  z-50">
      <div className="drawer   text-white ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`w-full navbar lg:px-32 ${
              scrolled ? "navbg" : "bg-transparent"
            }  `}
          >
            <Link to="/" spy={true} offset={-100} smooth={true} duration={800}>
              <img src={pplogo} alt="Logo" className="w-9 h-9 mx-2" />
            </Link>

            <div className="flex-1 px-2 mx-2 Belanosima text-xl ">
              Pacific PowerPlant
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className="mx-2 text-lg YsabeauSC font-bold hvr-underline-from-center"
                  >
                    <Link
                      to={`/${navLink.id}`}
                      smooth={true}
                      duration={1000}
                      offset={-100}
                      onClick={() => handleNavLinkClick(navLink.id)}
                      style={{
                        color:
                          activeLink === navLink.id ? "#ccf2ff" : "#ffffff",
                      }}
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-primary text-white YsabeauSC">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  to={`/${navLink.id}`}
                  duration={2000}
                  spy={true}
                  offset={-100}
                  className="hover:text-teal-300"
                  onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;
                  }}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
