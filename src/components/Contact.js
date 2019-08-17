import React from 'react';
import styled from 'styled-components';
import ContactForm from '../shared/ContactForm';
import ContentContainer from '../shared/ContentContainer';
import Listing from '../shared/Listing';
import { Github } from 'styled-icons/fa-brands/Github';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

const StyledContentContainer = styled(ContentContainer)`
  text-align: center;
  color: #e75a7c;
  padding-bottom: 30px;
`;

const GithubIcon = styled(Github)`
  height: 22px;
  width: 22px;
`;

const LinkedinIcon = styled(Linkedin)`
  height: 22px;
  width: 22px;
`;

const Contact = () => (
  <StyledContentContainer>
    <Listing>
      <Listing.Heading>
        Have a question for me?
      </Listing.Heading>
      <Listing.Subheading>
        Curious about something I've worked on?
      </Listing.Subheading>
      <Listing.Subheading>
        Have a cool project I should know about?          
      </Listing.Subheading>
      <Listing.Subheading>
        Need help with something?
      </Listing.Subheading>
      <Listing.Heading>
        Hit me up!
      </Listing.Heading>
    </Listing>
    <ContactForm action="https://formcarry.com/s/L451czvHge3" method="POST" accept-charset="UTF-8">
      <ContactForm.Label htmlFor="name">Your Name:</ContactForm.Label>
      <ContactForm.Input type="text" name="name"/>
      <ContactForm.Label htmlFor="_replyto">Best Email Address to Reach You At:</ContactForm.Label>
      <ContactForm.Input type="email" name="_replyto"/>
      <ContactForm.Label htmlFor="message">Message for Me:</ContactForm.Label>
      <ContactForm.TextArea type="text" name="message"/>
      <ContactForm.Submit type="submit" value="Send"/>
    </ContactForm>
    <Listing.Link href="https://github.com/nthugon"><GithubIcon></GithubIcon></Listing.Link>
    <Listing.Link href="https://www.linkedin.com/in/nathanhugon"><LinkedinIcon></LinkedinIcon></Listing.Link>
  </StyledContentContainer>
);

export default Contact;