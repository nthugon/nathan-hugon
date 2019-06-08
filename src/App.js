import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Sample from './components/Sample';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 115px;
  bottom: 50px;
  overflow: auto; 
  color: #fafafa;      
  background-color: #d3d3d3;
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
        <DefaultLayout path="/" exact component={Home} subheading="Home" link="Sample"/>
        <DefaultLayout path="/sample" exact component={Sample} subheading="Sample" link="Home" />
        <DefaultLayout path="/about" component={About} subheading="About" link="Sample"/>
      </div>
    );
  }
}

export default App;
