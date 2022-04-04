import React from "react";
import styled from "styled-components";

import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";

const About = () => {
  return (
    <AboutSection id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-cards">
            <AboutCard
              Icon={FaAward}
              title="Experience"
              description="1+ Years"
            />
            <AboutCard
              Icon={AiFillFolderAdd}
              title="projects"
              description="20+ Completed Projects"
            />
          </div>
          <div className="about-text">
            <p>
              I'm Adel Yasser from Egypt, I'm a self-learning programming front
              end developer, I have 1+ years of experience in the industry. with
              strong experience in HTML CSS JavaScript Bootstrap React.js, I
              believe my frontend skills and I'm working on improve my skills
              and learning new things
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};
const AboutSection = styled.section``;
export default About;
