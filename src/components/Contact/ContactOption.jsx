import React from "react";
import styled from "styled-components";

const ContactOption = ({ Icon, title, description }) => {
  return (
    <ContactArticle className="contact-option">
      <Icon />
      <div className="title">
        <h4>{title}</h4>
      </div>
      <a href={description} target="_blank" rel="noreferrer">
        Send A Message
      </a>
    </ContactArticle>
  );
};

const ContactArticle = styled.article``;

export default ContactOption;
