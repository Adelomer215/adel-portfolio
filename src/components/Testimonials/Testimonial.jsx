import React from "react";
import styled from "styled-components";

const Testimonial = ({ img, client, className }) => {
  return (
    <TestimonialArticle className={className}>
      <div className="client-avatar">
        <img src={img} alt="client-avatar" />
      </div>
      <h4>{client}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quod modi neque doloremque? Commodi provident ullam est obcaecati quod
        reiciendis voluptates sapiente harum enim? Nihil necessitatibus hic a
        rem cumque.
      </p>
    </TestimonialArticle>
  );
};

const TestimonialArticle = styled.article`
  background-color: #2c2c6c;
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
  .client-avatar {
    width: 8rem;
    overflow: hidden;
    aspect-ratio: 1/1;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.3rem solid rgba(77, 181, 255, 0.4);
  }
  p {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
    /* width: 80%; */
    margin: 0.8rem auto 0;
  }
`;
export default Testimonial;
