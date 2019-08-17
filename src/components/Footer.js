import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Briefcase } from 'styled-icons/octicons';
import { CodeBlock } from 'styled-icons/boxicons-regular';
import { Contact } from 'styled-icons/boxicons-solid';
import { Graduation } from 'styled-icons/boxicons-solid/Graduation';

const FooterWrapper = styled.footer`
  box-sizing: border-box;    
  text-align: center;
  padding: 5px 0 0;
  background-color: #377771;
  font-size: 1.6rem;
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

const FooterNav = styled.nav`
  list-style: none;            
  font-size: 1.6rem;            
  display: flex;
  flex-direction: row;
`;

const FooterNavLink = styled(Link)`
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #fafafa;

  &:visited {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #fafafa;
  }
`;

const FooterNavLinkText = styled.li`
  padding: 5px 0 0;
  font-size: 1.0rem;
`;

const BriefcaseIcon = styled(Briefcase)`
  height: 20px;
  width: 20px;
`;

const GraduationIcon = styled(Graduation)`
  height: 20px;
  width: 20px;
`;

const CodeBlockIcon = styled(CodeBlock)`
  height: 20px;
  width: 20px;
`;

const ContactIcon = styled(Contact)`
  height: 20px;
  width: 20px;
`;

const Footer = () => ( 
  <FooterWrapper>
    <FooterNav>
      <FooterNavLink to="/experiences">
        <BriefcaseIcon />
        <FooterNavLinkText>EXPERIENCES</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/education">
        <GraduationIcon />
        <FooterNavLinkText>EDUCATION</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/projects">
        <CodeBlockIcon />
        <FooterNavLinkText>PROJECTS</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/contact">
        <ContactIcon />
        <FooterNavLinkText>CONTACT</FooterNavLinkText>
      </FooterNavLink>
    </FooterNav>
  </FooterWrapper>
);

export default Footer;