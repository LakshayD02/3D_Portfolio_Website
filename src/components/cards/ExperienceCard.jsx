import React, { useState, useEffect } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
    border: 3px solid black;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ViewButton = styled.button`
  background-color: #1d1836;
  border: 2px solid transparent;
  border-image: linear-gradient(to right, #8e2de2, #4a00e0);
  border-image-slice: 1;
  color: #fff;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-right: 10px;
  margin-top: 20px;
  &:hover {
    background-color: #1d1536;
    border: 2px solid transparent;
    border-image: linear-gradient(to right, #cccccc, #ffffff);
    border-image-slice: 1;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: black;
  border-radius: 5px;
  padding: 5px;
  max-width: 85%;
  max-height: 85%;
  overflow: auto;
  position: relative;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  background-color: transparent;
  border: none;
  font-size: 50px;
  color: black;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    font-size: 35px;
    top: 5px;
    right: 15px;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ExperienceCard = ({ experience }) => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const toggleCertificateModal = () => {
    setShowCertificateModal(!showCertificateModal);
  };

  useEffect(() => {
    const handleCloseModal = () => {
      setShowCertificateModal(false);
    };

    window.addEventListener("scroll", handleCloseModal);

    return () => {
      window.removeEventListener("scroll", handleCloseModal);
    };
  }, []);

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "3px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience?.img} />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <Date>{experience?.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <Skills>
              <b>Skills</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={`skill-${index}`}>• {skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
            <div>
              <ViewButton onClick={toggleCertificateModal}>
                View Certificate
              </ViewButton>
            </div>
          </>
        )}
      </Description>
      {showCertificateModal && (
        <ModalBackdrop>
          <ModalContent>
            <CloseButton onClick={toggleCertificateModal}>&times;</CloseButton>
            <CertificateImage
              src={experience.internshipCert}
              alt="Internship Certificate"
            />
          </ModalContent>
        </ModalBackdrop>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
