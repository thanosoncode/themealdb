import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <img
          src="https://www.themealdb.com/images/meal-icon.png"
          alt="meal-icon"
        />
        <div>
          <h1>Welcome to TheMealDb</h1>
          <p>
            Welcome to TheMealDB: An open, crowd-sourced database of Recipes
            from around the world. <br /> We also offer a free JSON API for
            anyone wanting to use it. If you like the site, please consider
            supporting us on Patreon by clicking the link below...
          </p>
          <div className="patreon">
            <Link
              to={{ pathname: "https://www.patreon.com/thedatadb" }}
              target="_blank"
            >
              <img
                src="https://www.themealdb.com/images/patreon_logo.png"
                alt="patreon"
              />
              Click To Support: Currently 650 Supporters
            </Link>
          </div>
        </div>

        <img
          src="	https://www.themealdb.com/images/meal-icon.png"
          alt="meal-icon"
        />
      </div>
      <div className="horizontal-line"></div>
    </>
  );
};

export default Welcome;
