import React from 'react';
import styled from 'styled-components';
import Listing from '../shared/Listing';
import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Css3 } from 'styled-icons/fa-brands/Css3';
import { Js } from 'styled-icons/fa-brands/Js';
import { Angular } from 'styled-icons/fa-brands/Angular';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';

const Html5Icon = styled(Html5)`
  height: 75px;
  width: 75px;
`;

const Css3Icon = styled(Css3)`
  height: 75px;
  width: 75px;
`;

const JsIcon = styled(Js)`
  height: 75px;
  width: 75px;
`;

const AngularIcon = styled(Angular)`
  height: 75px;
  width: 75px;
`;

const NodeIcon = styled(Node)`
  height: 75px;
  width: 75px;
`;

const ReactLogoIcon = styled(ReactLogo)`
  height: 75px;
  width: 75px;
`;

const Wrapper = styled.div`
  text-align: center;
`;
 
const Projects = () => (
  <Wrapper>
    <Listing>
      <Listing.Heading>
        Knead and Proof
      </Listing.Heading>
      <Listing.Subheading>                
        2015-Present
      </Listing.Subheading>
      <Listing.Subheading>                
        <Listing.Link href="https://kneadandproof.com">kneadandproof.com</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Educational website detailing the art and science of sourdough baking
      </Listing.Text>
      <Html5Icon></Html5Icon>
      <Css3Icon></Css3Icon>
      <JsIcon></JsIcon>
    </Listing>
    <Listing>
      <Listing.Heading>
        Hop Hub
      </Listing.Heading>
      <Listing.Subheading>               
        2017-Present
      </Listing.Subheading>
      <Listing.Subheading>               
        <Listing.Link href="https://hophub.io">hophub.io</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Web app enabling users to find, save, and share thoughts on beers
      </Listing.Text>
      <Html5Icon></Html5Icon>
      <Css3Icon></Css3Icon>
      <AngularIcon></AngularIcon>
      <NodeIcon></NodeIcon>
    </Listing>
    <Listing>
      <Listing.Heading>
        Nathan Hugon
      </Listing.Heading>
      <Listing.Subheading>               
        2019-Present
      </Listing.Subheading>
      <Listing.Subheading>               
        <Listing.Link href="http://nathanhugon.com">nathanhugon.com</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Personal website
      </Listing.Text>
      <Html5Icon></Html5Icon>
      <Css3Icon></Css3Icon>
      <ReactLogoIcon></ReactLogoIcon>
    </Listing>
  </Wrapper>
);

export default Projects;