import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin-bottom: 70px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 505px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #8e2de2, #4a00e0);
  border-image-slice: 1;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 5px 40px;
  border-radius: 20px;
  padding: 18px 36px;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
    transform: scale(1);
    border: 2px solid transparent;
    border-image: linear-gradient(to right, #cccccc, #ffffff);
    border-image-slice: 1;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.text_primary + 90};
  border-radius: 12px;
  padding: 12.5px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-image: linear-gradient(to right, #8e2de2, #4a00e0);
  border-image-slice: 1;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.text_primary+ 0};
    border: 1px solid transparent;
    border-image: linear-gradient(to right, #cccccc, #ffffff);
    border-image-slice: 1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={`skill-${index}`}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-x-${index_x}`}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;