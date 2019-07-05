import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';


const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 90px;
  bottom: 45px;
  overflow: auto; 
  color: #fafafa;      
  background-color: #fafafa;
  background-size: 100%;
`;

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="default-layout">
            <Header />
            <Subheading subheading={rest.subheading} link={rest.link}/>
            <Content>
              <Component {...matchProps} />
            </Content>
            <Footer />
          </div>
        )} />
      );
    };

    return (
      <div>
        <DefaultLayout path="/" exact component={Home} subheading="Home" />
        <DefaultLayout path="/experiences" component={Experiences} subheading="Experiences" />
        <DefaultLayout path="/projects" component={Projects} subheading="Projects" />
        <DefaultLayout path="/interests" component={Interests} subheading="Interests" />
        <DefaultLayout path="/contact" component={Contact} subheading="Contact" />
      </div>
    );
  }
}

export default App;
