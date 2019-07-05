import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubHeadingContainer = styled.div`
  position: fixed;
  text-align: center;
  background-color: #d6dbd2;
  color: #377771;
  width: 100%;
  height: 50px;
  top: 40px;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
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