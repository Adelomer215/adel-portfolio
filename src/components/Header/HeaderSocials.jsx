import React from "react";
import { BsLinkedin, BsGithub, BsCode } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/adel-yasser-80b4411b1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Adelomer215" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://codepen.io/your-work/" target="_blank" rel="noreferrer">
        <BsCode />
      </a>
    </div>
  );
};

export default HeaderSocials;
