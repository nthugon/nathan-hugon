import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../shared/ContentContainer';
import Listing from '../shared/Listing';
import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Css3 } from 'styled-icons/fa-brands/Css3';
import { Js } from 'styled-icons/fa-brands/Js';
import { Angular } from 'styled-icons/fa-brands/Angular';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import { Github } from 'styled-icons/fa-brands/Github';

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

const GithubIcon = styled(Github)`
  height: 22px;
  width: 22px;
`;
 
const Projects = () => (
  <ContentContainer>
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
      <Listing.Subheading>
        <Listing.Link href="https://github.com/nthugon/kneadAndProof"><GithubIcon></GithubIcon>/nthugon/kneadAndProof</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Educational website detailing the art and science of sourdough baking
      </Listing.Text>
      <Listing.Text>
        Built using HTML, CSS, and vanilla JS
      </Listing.Text>
      <Listing.IconContainer>
        <Html5Icon></Html5Icon>
        <Css3Icon></Css3Icon>
        <JsIcon></JsIcon>
      </Listing.IconContainer>
      <Listing.Divider></Listing.Divider>
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
      <Listing.Subheading>
        <Listing.Link href="https://github.com/nthugon/hophub"><GithubIcon></GithubIcon>/nthugon/hophub</Listing.Link>
      </Listing.Subheading>
      <Listing.Subheading>
        <Listing.Link href="https://github.com/nthugon/hophub-server"><GithubIcon></GithubIcon>/nthugon/hophub-server</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Web app enabling users to find, save, and share thoughts on beers
      </Listing.Text>
      <Listing.Text>
        Built using the MEAN stack (MongoDB, Express, AngularJS, and Node)
      </Listing.Text>
      <Listing.IconContainer>
        <AngularIcon></AngularIcon>
        <NodeIcon></NodeIcon>
      </Listing.IconContainer>
      <Listing.Divider></Listing.Divider>
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
      <Listing.Subheading>
        <Listing.Link href="https://github.com/nthugon/nathan-hugon"><GithubIcon></GithubIcon>/nthugon/nathan-hugon</Listing.Link>
      </Listing.Subheading>
      <Listing.Text>
        Personal website
      </Listing.Text>
      <Listing.Text>
        Built using React with Styled Components
      </Listing.Text>
      <Listing.IconContainer>
        <ReactLogoIcon></ReactLogoIcon>
      </Listing.IconContainer>
    </Listing>
  </ContentContainer>
);

export default Projects;