import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  padding: 40px 0 0 0;
  text-align: center;
  color: #e75a7c;
  margin: 0 auto;
  width: 50%;
  font-size: 2.2rem;
`;

const Wrapper = styled.div`
  text-align: center;
  color: #e75a7c;
`;

const Contact = () => (
  <Wrapper>
      <Text>Content for contact info.</Text>
      <form action="https://formcarry.com/s/L451czvHge3" method="POST" accept-charset="UTF-8">
        name
        <input type="text" name="name"/>
        email
        <input type="email" name="_replyto"/>
        message
        <input type="text" name="message"/>
        <input type="submit" value="Send"/>
      </form>
  </Wrapper>

);

export default Contact;