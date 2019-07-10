import React from 'react';
import styled from 'styled-components';
import Listing from '../shared/Listing'

const Wrapper = styled.div`
`;
 
const Experiences = () => (
  <Wrapper>
    <Listing>
      <Listing.Heading>
        Software Engineer at Zapproved
      </Listing.Heading>
      <Listing.Subheading>
        2017-Present | <Listing.NoWrap>Portland, OR</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Implement and style complex UI features using Angular
        </Listing.ListItem>
        <Listing.ListItem>
          Build API endpoints and backend infrastructure using .NET and AWS
        </Listing.ListItem>
        <Listing.ListItem>
          Introduced unit testing to the front end
        </Listing.ListItem>
        <Listing.ListItem>
          Designed and built a horizontally scalable message broker
          deployed with Terraform using Docker, ECS, and Fargate
        </Listing.ListItem>
        <Listing.ListItem>
          Served as a member of the alarm council tasked with alleviating the burden of being on support
        </Listing.ListItem>
        <Listing.ListItem>
          Supervised an engineering intern
        </Listing.ListItem>
      </Listing.List>
    </Listing>
    <Listing>
      <Listing.Heading>
        Contract Web Developer at ACR Systems
      </Listing.Heading>
      <Listing.Subheading>
        2016-2017 | Remote <Listing.NoWrap>(Jacksonville, FL)</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Designed and built content for customer-facing point-of-sale software
        </Listing.ListItem>
        <Listing.ListItem>
          Designed, built, and wrote the narrative for a web-based software demo
        </Listing.ListItem>
      </Listing.List>
    </Listing>
    <Listing>
      <Listing.Heading>
        Delivery Driver at Domino's Pizza
      </Listing.Heading>
      <Listing.Subheading>
        2011-2016 | <Listing.NoWrap>Beaverton, OR</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Provided friendly service while taking orders, handling payments, and making deliveries
        </Listing.ListItem>
        <Listing.ListItem>
          Ranked as one of the store’s “Top 5” employees based on customer feedback
        </Listing.ListItem>
      </Listing.List>
    </Listing>
    <Listing>
      <Listing.Heading>
        Language Arts Teacher at Wilson Middle School
      </Listing.Heading>
      <Listing.Subheading>
        2008-2011 | <Listing.NoWrap>Tulsa, OK</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Taught reading and writing through the exploration of literature
        </Listing.ListItem>
        <Listing.ListItem>
          Increased district benchmark test scores by 20% over previous years
        </Listing.ListItem>
      </Listing.List>
    </Listing>
    <Listing>
      <Listing.Heading>
        English Teacher at Terry Parker High School
      </Listing.Heading>
      <Listing.Subheading>
        2007-2008 | <Listing.NoWrap>Jacksonville, FL</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Provided an organized, respectful, and disciplined environment for learning
        </Listing.ListItem>
        <Listing.ListItem>
          Raised student reading scores an average of 6% (or 2 ½ grade levels)
        </Listing.ListItem>
      </Listing.List>
    </Listing>
  </Wrapper>
);

export default Experiences;