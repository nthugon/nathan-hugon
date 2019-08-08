import React from 'react';
import ContentContainer from '../shared/ContentContainer';
import Listing from '../shared/Listing';
 
const Education = () => (
  <ContentContainer>
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
      <Listing.Divider></Listing.Divider>
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
  </ContentContainer>
);

export default Education;