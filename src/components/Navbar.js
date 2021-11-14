import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Navlinks from "./Navlinks";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { openMobile, setOpenMobile } = useGlobalContext();

  return (
    <>
      <nav>
        <div className="nav-center">
          <Link to="/">
            <img
              src="https://www.themealdb.com/images/logo-small.png"
              alt="TheMealDbClone"
            />
          </Link>

          <Navlinks />
          <div className="menu" onClick={() => setOpenMobile(!openMobile)}>
            <FaBars />
          </div>
        </div>
      </nav>
      <NavbarMobile />
    </>
  );
};

export default Navbar;
