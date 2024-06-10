import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const NavLinks = () =>{
    
  }
  const [isOpen, setisOpen] = useState(false)

  const handleHarmburger = ()=>{
    setisOpen(!isOpen)
  }
  return (
    <div className="  h-screen ">
      <header className="flex items-center justify-between fixed z-10 w-full text-white p-5 bg-customBlue">
        <h2 className="font-bold border-b-2 border-white text-lg">
          King's T<span className="text-customRed">e</span>ch
        </h2>
        <button className="md:hidden " onClick={handleHarmburger}>{isOpen ?<FaTimes />: <FaBars />}</button>
        <ul className=" flex flex-col items-start gap-5 absolute sm:bg-black left-0 p-5 top-20  w-full md:w-fit md:p-0 md:flex-row md:h-auto  h-80 md:flex md:static md:bg-transparent ">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white font-bold" : "font-bold"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-[white] font-bold" : "font-bold"
              } to={"about"}>About</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-[white font-bold]" : "font-bold"
              } to={"services"}>Services</NavLink>
          </li>
           <li>
            <NavLink className={({ isActive }) =>
                isActive ? "border-b-2 border-[white font-bold]" : "font-bold"
              } to={"contact"}>Contact</NavLink>
          </li>
        </ul>
      </header>
      <main className="bg-hero-pattern bg-center bg-cover bg-no-repea bg-fixed"> 
        <Outlet />
      </main>
      
    </div>
  );
};

export default RootLayout;
