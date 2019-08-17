import React from 'react';
import styled from 'styled-components';
import baking from '../img/baking.jpg';
import skateboarding from '../img/skateboarding.jpg';
import skateboarding2 from '../img/skateboarding2.jpg';
import music from '../img/music.jpg';
import code from '../img/code.jpg';
import snowskating from '../img/snowskating.jpg';
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
        <ImageCube.Back background={music}></ImageCube.Back>
        <ImageCube.Left background={snowskating}></ImageCube.Left>
        <ImageCube.Right background={code}></ImageCube.Right>
        <ImageCube.Top background={baking}></ImageCube.Top>
        <ImageCube.Bottom background={skateboarding}></ImageCube.Bottom>
        <ImageCube.Front background={skateboarding2}></ImageCube.Front>
      </ImageCube.Cube>
    </ImageCube>
  </Wrapper>
);

export default Interests;