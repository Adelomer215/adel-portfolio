import React from "react";
import styled from "styled-components";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <HeaderContainer className="container header_container">
        <Content className="">
          <h5>Hello i'm</h5>
          <h1>Adel Yasser</h1>
          <h5 className="text-light">Front End Developer</h5>
          <CTA />
          <HeaderSocials />
        </Content>
        <div className="me">
          <img src="images/me.jpg" alt="Adel" title="Adel" />
        </div>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .me {
    width: 50%;
    img {
      border-radius: 25px;
      position: relative;
      animation: up-down 5s linear infinite;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .header-socials {
      margin-bottom: 0.4rem;
    }
    .me {
      width: 80%;
      img {
        animation: none;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
`;

export default Header;
