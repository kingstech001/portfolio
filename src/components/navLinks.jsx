import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white font-bold" : "font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[white] font-bold " : "font-bold"
          }
          to={"about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[white ] font-bold " : "font-bold"
          }
          to={"services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[white ] font-bold" : "font-bold"
          }
          to={"contact"}
        >
          Contact
        </NavLink>
      </>
  )
}

export default NavLinks