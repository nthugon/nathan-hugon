import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="default-layout">
            <Header />
            <Subheading subheading={rest.subheading} link={rest.link}/>
            <div className="content">
              <Component {...matchProps} />
            </div>
            <Footer />
          </div>
        )} />
      );
    };

    return (
      <div>
        <DefaultLayout path="/" exact component={Home} subheading="Home" link="Content"/>
        <DefaultLayout path="/content" exact component={Content} subheading="Content" link="Home" />
        <DefaultLayout path="/about" component={About} subheading="About" link="Content"/>
      </div>
    );
  }
}

export default App;
