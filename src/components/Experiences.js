import React from 'react';
import ContentContainer from '../shared/ContentContainer';
import Subheading from '../shared/Subheading';
import Listing from '../shared/Listing';

const Experiences = () => (
  <ContentContainer>
    <Listing>
      <Listing.Heading>
        Software Engineer at Zapproved
      </Listing.Heading>
      <Listing.Subheading>
        2017-Present | <Listing.NoWrap>Portland, OR</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          Build backend services, RESTful APIs, and workers within a microservices architecture
        </Listing.ListItem>
        <Listing.ListItem>
          Implement and style UI features using AngularJS and Angular with TypeScript
        </Listing.ListItem>
        <Listing.ListItem>
          Actively participate in Scrum ceremonies that guide our sprint work according to Agile principles
        </Listing.ListItem>
        <Listing.ListItem>
          Implement cron jobs and serverless computing using AWS Lambda functions
        </Listing.ListItem>
        <Listing.ListItem>
          Manage pub/sub communication between services and workers using AWS SNS and SQS
        </Listing.ListItem>
        <Listing.ListItem>
          Use Terraform to create, modify, and manage infrastructure as code
        </Listing.ListItem>
        <Listing.ListItem>
          Use AWS EKS to run Kubernetes container orchestration
        </Listing.ListItem>
        <Listing.ListItem>
          Serve as a member of the Architecture Working Group that creates, compiles, and communicates
          programming standards, best practices, and exemplars to the Engineering department
        </Listing.ListItem>
        <Listing.ListItem>
          Served as a member of the Alarm Council tasked with alleviating the burden of being on support
        </Listing.ListItem>
        <Listing.ListItem>
          Supervised an engineering intern
        </Listing.ListItem>
      </Listing.List>
      <Listing.Divider></Listing.Divider>
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
      <Listing.Divider></Listing.Divider>
    </Listing>
    <Subheading>Conferences</Subheading>
    <Listing>
      <Listing.Heading>
        ML4ALL
      </Listing.Heading>
      <Listing.Subheading>
        May 27th-29th, 2018 | <Listing.NoWrap>Portland, OR</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          A conference to encourage the use of Machine Learning in the average developer's toolbox
        </Listing.ListItem>
        <Listing.ListItem>
          Attended sessions on machine learning models, tools, and use cases
        </Listing.ListItem>
      </Listing.List>
      <Listing.Divider></Listing.Divider>
    </Listing>
    <Listing>
      <Listing.Heading>
        NG-Conf
      </Listing.Heading>
      <Listing.Subheading>
        April 16th-20th, 2018 | <Listing.NoWrap>Salt Lake City, UT</Listing.NoWrap>
      </Listing.Subheading>
      <Listing.List>
        <Listing.ListItem>
          World's Original Angular Conference
        </Listing.ListItem>
        <Listing.ListItem>
          Participated in a full day workshop on migrating applications from AngularJS to Angular          
        </Listing.ListItem>
        <Listing.ListItem>
          Attended sessions on a variety of topics including testing, observables, and server side rendering          
        </Listing.ListItem>
      </Listing.List>
      <Listing.Divider></Listing.Divider>
    </Listing>
    <Subheading>Past Lives</Subheading>
    <Listing>
      <Listing.Text>
        Prior to a career in software development, I have been in food service as a pizza maker and
        delivery driver, in education as a middle school and high school teacher, and in construction as both a
        skilled worker and a manager. These experiences have helped shape me into the craftsperson,
        leader, and mentor that I am today.  
      </Listing.Text>
    </Listing>
  </ContentContainer>
);

export default Experiences;