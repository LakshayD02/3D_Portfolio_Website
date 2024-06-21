import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import {
  ChatRounded,
  GitHub,
  LinkedIn,
  DuoRounded,
  CodeOffRounded,
  IntegrationInstructionsRounded,
} from "@mui/icons-material";
import Projects from './Projects'

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
color: ${({ theme }) => theme.primary};
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Lakshay Dhoundiyal</Logo>
        <Nav>
          <NavLink href="https://drive.google.com/drive/folders/1SVrsn63xj2R8EKQxQzIYkzbovBkgFzmS?usp=sharing" target="_blank">Resumes</NavLink>
          <NavLink href="https://drive.google.com/file/d/1Qu5c9TIFb1QOekkBPx6oTx0xttvRSi-g/view?usp=sharing" target="_blank">Projects</NavLink>
          <NavLink href="https://drive.google.com/drive/folders/1ZuuYqYpbE6lofig8MbIFnlsTUlqQ--KX?usp=sharing" target="_blank">Certifications</NavLink>
          <NavLink href="https://drive.google.com/drive/folders/1Powlhl0NBAKl__EEY5b6havdXQES_aGa?usp=sharing" target="_blank">Research Papers</NavLink>
          <NavLink href="https://drive.google.com/drive/folders/1BegbFK_gz-DIm5iR5iM2gw-Rv35DDLJ1?usp=sharing" target="blank">My LOR's</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.hashnode} target="display">
            <ChatRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.topmate} target="display">
            <DuoRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.leetcode} target="display">
            <CodeOffRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.hackerrank} target="display">
            <IntegrationInstructionsRounded />
          </SocialMediaIcon>
          {/* <SocialMediaIcon href={Bio.discord} target="display">
            <SmartToyRounded />
          </SocialMediaIcon> */}
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Lakshay Dhoundiyal. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
