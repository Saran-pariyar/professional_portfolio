import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

import ME from "../../assets/me2.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Saran Pariyar</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me"> */}
          <img src={ME} alt="me" className="me" />
        {/* </div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
