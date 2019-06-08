import React from 'react';
import UnstyledLink from '../shared/UnstyledLink';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubHeadingContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 100%;
  height: 75px;
  top: 40px;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2.8rem;
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 7px 0 9px 0;
  text-align: center;
  width: 120px;
  border: none;
  outline: none;
  background-color: #97dfb7;
  border-radius: 15px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Subheading = (props) => (
  <SubHeadingContainer>
    <Title>{props.subheading}</Title>
      <UnstyledLink to={props.link === 'Sample' ? '/sample' : '/'} >
        <Button>
          <ButtonText>Go to {props.link}</ButtonText>
        </Button>
      </UnstyledLink>
  </SubHeadingContainer> 
);

Subheading.propTypes = {
  subheading: PropTypes.string,
  link: PropTypes.string
};

export default Subheading;