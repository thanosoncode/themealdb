import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          2021 TheMealDb <br />
          Proudly build in the UK
        </div>
        <div className="footer-links">
          <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
          <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
          <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
        </div>
        <div className="footer-about">
          <p>About</p>
          <p>Faq</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
