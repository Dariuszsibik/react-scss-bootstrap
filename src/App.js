import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';

class App extends Component {

  render() {

    return (
      <div>
        <Nav/>
        <Hero/>
        <Footer/>
      </div>
    );
  }
}

export default App