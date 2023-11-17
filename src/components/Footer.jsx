import React from "react";
import "./home/Home1";
import { FaDotCircle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="navbar w-full bg-transparent mt-20">
      <div className="navbar-start">
        <label tabIndex={0} className=" text-slate-800">
          <FaDotCircle size="12" />
        </label>
      </div>
      <div className="navbar-center">
        <a className=" text-sm  text-white -ml-40">
          Copyright © <span className="josefin text-yellow-200 text-lg">Pacific Powerplant. </span>All right reserved
        </a>
      </div>
    </div>
  );
};

export default Footer;
