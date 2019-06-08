import React from 'react';
import Hero from './Hero';

const Home = () => (
  <Hero>
    <Hero.Container>
      <Hero.TextWrapper>
        <Hero.Text><strong>AppName</strong> serves as your source for ...</Hero.Text>
        <Hero.Text>Leading Question?</Hero.Text>
        <Hero.Text>Reasons you want to use it.</Hero.Text>
      </Hero.TextWrapper>
    </Hero.Container>
  </Hero>
);

export default Home;