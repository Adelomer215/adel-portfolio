import { useState } from "react";
import styled from "styled-components";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Testimonial from "./Testimonial";
import data from "../data/clientData";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  const ClientData = data.map((ele, idx) => {
    return (
      <Testimonial
        img={ele.img}
        client={ele.client}
        key={idx}
        className={idx === current ? "slide active" : "slide"}
      />
    );
  });

  return (
    <section id="testimonials">
      <FaArrowAltCircleLeft onClick={prevSlide} className="Left" />
      <FaArrowAltCircleRight onClick={nextSlide} className="Right" />
      <h5>Review</h5>
      <h2>Testimonials</h2>
      <Container className="container">{ClientData}</Container>
    </section>
  );
};

const Container = styled.div`
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default Testimonials;
