import React from "react";
import styled from "styled-components";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ExperienceCard = ({ skill, level }) => {
  return (
    <ExCard className="experience-card">
      <div className="icon">
        <BsFillPatchCheckFill />
      </div>
      <div className="text">
        <h2>{skill}</h2>
        <h5 className="text-light">{level}</h5>
      </div>
    </ExCard>
  );
};

const ExCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

export default ExperienceCard;
