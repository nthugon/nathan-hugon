import React from 'react';
import styled from 'styled-components';
import ContactForm from '../shared/ContactForm';
import Text from '../shared/Text';

const Wrapper = styled.div`
  text-align: center;
  color: #e75a7c; 
`;

const Contact = () => (
  <Wrapper>
      <Text>
        Have a question for me about something I've worked on?
      </Text>
      <Text>
        Have a cool project I should know about? 
      </Text>
      <Text>
        Need help with something?
      </Text>
      <Text>
        Hit me up.
      </Text>
      <ContactForm action="https://formcarry.com/s/L451czvHge3" method="POST" accept-charset="UTF-8">
        <ContactForm.Label for="name">Your Name</ContactForm.Label>
        <ContactForm.Name type="text" name="name"/>
        <ContactForm.Label for="_replyto">Best Email Address to Reach You At</ContactForm.Label>
        <ContactForm.Email type="email" name="_replyto"/>
        <ContactForm.Label for="message">Message for Me</ContactForm.Label>
        <ContactForm.Message type="text" name="message"/>
        <ContactForm.Submit type="submit" value="Send"/>
      </ContactForm>
  </Wrapper>
);

export default Contact;