import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../shared/ContentContainer';

const Text = styled.p`
  padding-top: 40px;
  text-align: center;
  color: #e75a7c;
  margin: 0 auto;
  width: 50%;
  font-size: 2.2rem;
`;

const Interests = () => (
  <ContentContainer>
    <Text>Content for personal interests.</Text>
  </ContentContainer>
);

export default Interests;