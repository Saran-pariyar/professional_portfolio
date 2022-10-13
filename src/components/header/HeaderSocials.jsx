import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/saran-pariyar-5078b5217/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Saran-pariyar" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.twitter.com/saran_pariyar1/" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
      <a href="https://www.instagram.com/saran_pariyar1/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
