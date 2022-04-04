import React from "react";
import styled from "styled-components";

const PortfolioItem = ({ imgSrc, title, linkCode, LinkLive }) => {
  return (
    <PortfolioArticle>
      <div className="portfolio-item-img">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio-cta">
        <a
          href={linkCode}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          See Code
        </a>
        <a
          href={LinkLive}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          See Live
        </a>
      </div>
    </PortfolioArticle>
  );
};

const PortfolioArticle = styled.article`
  background-color: #2c2c6c;
  padding: 1.5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  width: calc(100% / 2 - 2rem);
  &:hover {
    background-color: transparent;
    border-color: #2c2c6c;
  }
  /* img {
    max-width: 510px;
  } */

  h3 {
    margin: 1.2rem 0 2rem;
    text-align: center;
    font-size: 2rem;
  }
  .portfolio-cta {
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 757px) {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;

export default PortfolioItem;
