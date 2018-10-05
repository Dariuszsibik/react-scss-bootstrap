import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';

class App extends Component {

  render() {

    return (
      <div>
        <Nav/>
        <Hero/>
        <Footer/>
        <Copyright/>
      </div>
    );
  }
}

export default App