import React from "react";
import styled from "styled-components";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <Container className="container">
        <PortfolioItem
          imgSrc="images/tesla.png"
          title="Tesla Clone Website"
          linkCode="https://github.com/Adelomer215/Tesla-Clone"
          LinkLive="https://adelomer215.github.io/Tesla-Clone/"
        />
        <PortfolioItem
          imgSrc="images/elzeroLanding.png"
          title="Landing page 1"
          linkCode="https://github.com/Adelomer215/Landing-Page-ELzero-Web-School"
          LinkLive="https://adelomer215.github.io/Landing-Page-ELzero-Web-School/"
        />
        <PortfolioItem
          imgSrc="images/landing-tow.png"
          title="Website 1"
          linkCode="https://github.com/Adelomer215/HTML_And_CSS_template_One"
          LinkLive="https://adelomer215.github.io/HTML_And_CSS_template_One/"
        />
        <PortfolioItem
          imgSrc="images/w-1.png"
          title="Website 2"
          linkCode="https://github.com/Adelomer215/react-website"
          LinkLive="https://adelomer215.github.io/react-website/"
        />
      </Container>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default Portfolio;
