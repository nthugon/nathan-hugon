import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../shared/ContentContainer';
import Listing from '../shared/Listing';
import profilePic from '../img/nathan-hugon-hs.jpg';
import baking from '../img/baking.jpg';
import beach from '../img/beach-cropped.jpg';
import skateboarding2 from '../img/skateboarding2.jpg';
import music from '../img/music.jpg';
import snowskating from '../img/snowskating.jpg';
import ImageCube from '../shared/ImageCube';

const ImageCubeContainer = styled.div`
  padding-top: 45px;
`;

const Text = styled(Listing)`
  padding: 75px 0;
`;

const Home = () => (
  <ContentContainer>
    <ImageCubeContainer>
      <ImageCube>
        <ImageCube.Cube>
          <ImageCube.Back background={beach}></ImageCube.Back>
          <ImageCube.Left background={music}></ImageCube.Left>
          <ImageCube.Right background={profilePic}></ImageCube.Right>
          <ImageCube.Top background={snowskating}></ImageCube.Top>
          <ImageCube.Bottom background={baking}></ImageCube.Bottom>
          <ImageCube.Front background={skateboarding2}></ImageCube.Front>
        </ImageCube.Cube>
      </ImageCube>
    </ImageCubeContainer>
    <Text>
      Hi, my name is Nathan. I am a full-stack developer with a love for outdoor adventure, music, and sourdough baking.
      Whether working in React and Node, Angular and .NET, or any other stack, I strive to write code that is modular, flexible, and easy to read.
    </Text>
  </ContentContainer>
);

export default Home;