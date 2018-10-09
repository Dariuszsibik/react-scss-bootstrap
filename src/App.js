import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome';
import Education from './components/Education';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {

    return (
      <Router>
      <div>
          <Nav/>
          <Hero/>
          <Route exact path="/" component={Welcome} />
          <Route path="/test" component={Education} />
          <Welcome/>
          <Footer/>
          <Copyright/>

      </div>

      </Router>
      );
  }
}

export default App