import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "../components/navLinks";
import React, { useState } from "react";



const Header = () => {

    const [isOpen, setisOpen] = useState(false);

    const handleHarmburger = () => {
    setisOpen(!isOpen);
  };
  return (
    <div>
        <header className="flex items-center justify-between fixed z-10 w-full text-white p-5 bg-customBlue">
        <h2 className="font-bold border-b-2 border-white text-lg">
          King's T<span className="text-customRed">e</span>ch
        </h2>
        <button className="md:hidden " onClick={handleHarmburger}>
          {isOpen ? (
            <>
              <FaTimes /> <div className="absolute left-0 flex flex-col justify-center  top-[50px] items-center  text-start w-full bg-custom-gradient h-80"> <div className={'flex flex-col text-center gap-5 w-fit items-center'}><NavLinks /></div></div>
            </>
          ) : (
            <FaBars />
          )}
        </button>
        <div className="md:flex gap-5 sm:hidden">
        <NavLinks />
        </div>
      </header>
    </div>
  )
}

export default Header