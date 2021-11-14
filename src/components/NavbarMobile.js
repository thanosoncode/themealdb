import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const NavbarMobile = () => {
  const { openMobile } = useGlobalContext();
  return (
    <ul className={openMobile ? "nav-links-mobile show" : "nav-links-mobile"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/api">API</Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "https://forum.kodi.tv/showthread.php?tid=282387",
          }}
          target="_blank"
        >
          Forum
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://www.facebook.com/TheDataDB/" }}
          target="_blank"
        >
          <img
            src="https://www.themealdb.com/images/facebook_icon.png"
            alt="fb"
          />
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://twitter.com/TheAudioDB" }}
          target="_blank"
        >
          <img src="https://www.themealdb.com/images/twitter_icon.png" alt="" />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMobile;
