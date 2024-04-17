import React, { useState } from "react";
import proPic from "../assets/proPic.png";
import Logomark from "../assets/Logomark.png";
import arrowhead from "../assets/arrowHead.svg";
import openIcon from "../assets/openIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
        <div className="h-40 z-10">

      <div className="border-b fixed w-full h-16 flex justify-around items-center">
        <div className="flex gap-1 items-center w-5/6 ">
          <img
            src={Logomark}
            alt="Logo not available"
            width={30}
            height={30}
            className="inline align-middle"
          />
          <span className="font-bold text-lg">Hari hari</span>
          <ul className="list-none ml-5 gap-4 hidden sm:flex">
            <li className="text-[#475467]">Hare krishna</li>
            <li className="text-[#475467]">
              Haribol
              <span>
                <img className="ml-2 inline" src={arrowhead} alt="" />
              </span>
            </li>
            <li className="text-[#475467]">
              chant
              <span>
                <img className="ml-2 inline" src={arrowhead} alt="" />
              </span>
            </li>
            <li className="text-[#475467]">Gauranga</li>
          </ul>
        </div>
        <div >
          <img src={proPic} alt="" className="hidden sm:flex"/>
          {/* <img src={isMenuOpen?openIcon:<IoClose/>} alt="haribol" className="sm:hidden"/> */}
          {isMenuOpen?<GiHamburgerMenu className="w-6 h-6 sm:hidden" onClick={toggleMenu}/>:<IoClose className="w-10 h-10 sm:hidden" onClick={toggleMenu}/>}
        </div>
        <div>
        <ul className={`list-none absolute mt-10 ml-64 gap-4 ${!isMenuOpen?'block':'hidden'}`}>
            <li className="text-[#475467]">Hare krishna</li>
            <li className="text-[#475467]">
              Haribol
              <span>
                <img className="ml-2 inline" src={arrowhead} alt="" />
              </span>
            </li>
            <li className="text-[#475467]">
              chant
              <span>
                <img className="ml-2 inline" src={arrowhead} alt="" />
              </span>
            </li>
            <li className="text-[#475467]">Gauranga</li>
          </ul>
        </div>
      </div>
            </div>
    </>
  );
};

export default Navbar;
