import React from 'react';
import profilePic from '../img/nathan-profile.JPG';
import styled from 'styled-components';

const Profile = styled.div` 
  margin: 40px 0;

  @media (min-width: 768px) and (min-height: 1024px) {
    margin-top: 80px;
  }
`;

const ProfilePic = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 768px) and (min-height: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const ProfilePicContainer = styled.div`
  text-align: center;
`;

const ProfileText = styled.p`
  padding: 40px 0 0 0;
  text-align: center;
  color: #e75a7c;
  margin: 0 auto;
  width: 50%;
  font-size: 2.2rem;
`;

const Home = () => (
  <Profile>
    <ProfilePicContainer>
      <ProfilePic src={profilePic}></ProfilePic>
    </ProfilePicContainer>
    <ProfileText>
      My name is Nathan. I am a full-stack developer with a background in education and a love for board sports, music, and sourdough baking.
    </ProfileText>
  </Profile>
);

export default Home;