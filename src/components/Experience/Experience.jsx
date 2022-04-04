import React from "react";
import styled from "styled-components";

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container">
        <Skills className="have">
          <h3>What I Have Now</h3>
          <div className="skills">
            <ExperienceCard skill="HTML" level="Experienced" />
            <ExperienceCard skill="CSS" level="Experienced" />
            <ExperienceCard skill="JavaScript" level="Experienced" />
            <ExperienceCard skill="Bootstrap" level="Experienced" />
            <ExperienceCard skill="React-bootstrap" level="Experienced" />
            <ExperienceCard skill="SCSS" level="Experienced" />
            <ExperienceCard skill="React" level="Intermediate" />
            <ExperienceCard skill="Styled Components " level="Experienced" />
          </div>
        </Skills>
      </div>
    </section>
  );
};

const Skills = styled.div`
  background: rgba(77, 181, 255, 0.4);
  padding: 2.5rem 5rem;
  border-radius: 2rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid rgba(77, 181, 255, 0.4);
    cursor: pointer;
  }
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #4db5ff;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px;
    justify-content: center;
  }
`;

export default Experience;
