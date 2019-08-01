import React from 'react';
import profilePic from '../img/nathan-profile.JPG';
import styled from 'styled-components';

const Profile = styled.div` 
  margin: 60px 0;

  @media (min-width: 1024px) {
    margin: 100px 0 0;
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1366px) {
    margin: 100px auto;
    width: 70%;
  }

  @media (min-width: 1600px) {
    width: 50%;
  }

  @media (min-width: 768px) and (min-height: 1024px) {
    margin: 150px 0 0;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const ProfilePicContainer = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0 0 0 60px;
    -webkit-flex: 1; /* Safari 6.1+ */
    -ms-flex: 1; /* IE 10 */ 
    flex: 1;
  }

  @media (min-width: 1366px) {
    flex: 0 1 auto;
  }
`;

const ProfileText = styled.div`
  padding: 40px 0;
  text-align: center;
  color: #e75a7c;
  margin: 0 auto;
  width: 80%;
  font-size: 2.2rem;

  @media (min-width: 1024px) {
    padding: 100px 60px 40px 40px;
    -webkit-flex: 4; /* Safari 6.1+ */
    -ms-flex: 4; /* IE 10 */ 
    flex: 4;
  }

  @media (min-width: 1366px) {
    flex: 0 1 auto;
  }
`;

const Home = () => (
  <Profile>
    <ProfilePicContainer>
      <ProfilePic src={profilePic}></ProfilePic>
    </ProfilePicContainer>
    <ProfileText>
      My name is Nathan. I am a full-stack developer with a background in education and a love for board sports, music, and sourdough baking.
      Whether working in React and Node, Angular and .NET, or any other stack, I strive to write code that is modular, flexible, and easy to read.
    </ProfileText>
  </Profile>
);

export default Home;