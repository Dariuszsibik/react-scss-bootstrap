import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome';

class App extends Component {

  render() {

    return (
      <div>
        <Nav/>
        <Hero/>
        <Welcome/>
        <Footer/>
        <Copyright/>
      </div>
    );
  }
}

export default App