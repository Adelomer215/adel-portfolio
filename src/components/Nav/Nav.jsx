import { useState } from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineUser, AiFillMessage } from "react-icons/ai";
import { RiBook2Fill, RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#");

  const handleActive = (ele) => {
    setActive(ele);
  };
  return (
    <NavElement>
      <a
        href="#"
        className={active === "#" ? "active" : null}
        onClick={() => handleActive("#")}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : null}
        onClick={() => handleActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        className={active === "#portfolio" ? "active" : null}
        onClick={() => handleActive("#portfolio")}
      >
        <RiBook2Fill />
      </a>
      <a
        href="#testimonials"
        className={active === "#testimonials" ? "active" : null}
        onClick={() => handleActive("#testimonials")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : null}
        onClick={() => handleActive("#contact")}
      >
        <AiFillMessage />
      </a>
    </NavElement>
  );
};

const NavElement = styled.nav`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: max-content;
  z-index: 1111;
  left: 50%;
  display: flex;
  gap: 3rem;
  padding: 0.8rem 1.7rem;
  border-radius: 3rem;
  bottom: 5%;
  transform: translate(-50%);
  a {
    font-size: 1.5rem;
  }
`;
export default Nav;
