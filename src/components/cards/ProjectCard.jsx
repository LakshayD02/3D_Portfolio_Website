import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: rgba(103, 92, 230, 0.15) 0px 5px 25px;
  overflow: hidden;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  border: 3px solid rgba(255, 255, 255, 0.125);
  gap: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.3);
    border: 3px solid rgba(255, 255, 255, 0.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: -7px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1.7px solid grey;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  width: calc(50% - 5px);
  padding: 10px 10px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags></Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        {/* <Description>{project.tags}</Description> */}
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} key={member.id} />
        ))}
      </Members>
      <ButtonContainer>
        <Button href={project.github} target="_blank">
          Github <FontAwesomeIcon icon={faCode} style={{ marginLeft: "5px" }} />
        </Button>
        <Button href={project.webapp} target="_blank">
          Website <FontAwesomeIcon icon={faGlobe} style={{ marginLeft: "5px" }} />
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default ProjectCard;
