import React from 'react';
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

const Subheading = (props) => (
  <SubHeadingContainer>
    <Title>{props.subheading}</Title>
  </SubHeadingContainer> 
);

Subheading.propTypes = {
  subheading: PropTypes.string,
};

export default Subheading;