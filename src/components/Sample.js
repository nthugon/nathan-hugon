import React from 'react';
import Hero from './Hero';

const Content = () => (
  <Hero>
    <Hero.Container>
      <Hero.TextWrapper>
        <Hero.Text>This is the content of the app.</Hero.Text>
      </Hero.TextWrapper>
    </Hero.Container>
  </Hero>
);

export default Content;