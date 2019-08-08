import React from 'react';
import styled from 'styled-components';
import ImageCube from '../shared/ImageCube';

const Wrapper = styled.div`
`;

const Text = styled.p`
  padding-top: 40px;
  text-align: center;
  color: #e75a7c;
  margin: 0 auto;
  width: 50%;
  font-size: 2.2rem;
`;

const Interests = () => (
  <Wrapper>
    <Text>Content for personal interests.</Text>
    <ImageCube>
      <ImageCube.Cube>
        <ImageCube.Back background="https://source.unsplash.com/featured/?nature"></ImageCube.Back>
        <ImageCube.Left background="https://source.unsplash.com/featured/?tree"></ImageCube.Left>
        <ImageCube.Right background="https://source.unsplash.com/featured/?home"></ImageCube.Right>
        <ImageCube.Top background="https://source.unsplash.com/featured/?car"></ImageCube.Top>
        <ImageCube.Bottom background="https://source.unsplash.com/featured/?work"></ImageCube.Bottom>
        <ImageCube.Front background="https://source.unsplash.com/featured/?"></ImageCube.Front>
      </ImageCube.Cube>
    </ImageCube>
  </Wrapper>
);

export default Interests;