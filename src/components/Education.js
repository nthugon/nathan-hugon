import React from 'react';
import styled from 'styled-components';
import Listing from '../shared/Listing'

const Wrapper = styled.div`
`;
 
const Education = () => (
  <Wrapper>
    <Listing>
      <Listing.Heading>
        Code Fellows PDX (Alchemy Code Lab)
      </Listing.Heading>
      <Listing.Subheading>                
        2017 | <Listing.NoWrap>Portland, OR</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.Text>
        Certificate - Advanced Full-Stack JavaScript
      </Listing.Text>
    </Listing>
    <Listing>
      <Listing.Heading>
        University of Florida
      </Listing.Heading>
      <Listing.Subheading>               
        2006 | <Listing.NoWrap>Gainesville, FL</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.Text>
        Bachelor of Arts in English
      </Listing.Text>
    </Listing>
  </Wrapper>
);

export default Education;