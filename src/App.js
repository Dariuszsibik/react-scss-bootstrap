import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome';
import Education from './components/Education';
import {
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {

    return (
      <HashRouter>
      <div>
          <Nav/>
          <Hero/>
          <Link to="/">start</Link>
          <Link to="test">test</Link>
          <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/test' component={Education}/>
          </Switch>
          <Footer/>
          <Copyright/>

      </div>

      </HashRouter>
      );
  }
}

export default App