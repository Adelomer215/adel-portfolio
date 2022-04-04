import React from "react";

const AboutCard = ({ Icon, title, description }) => {
  return (
    <article>
      <Icon />
      <h5>{title}</h5>
      <small>{description}</small>
    </article>
  );
};

export default AboutCard;
