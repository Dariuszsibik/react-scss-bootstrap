import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome/Welcome';
import Education from './components/Education';
import Realizacje from './components/Welcome/Realizacje';
import Aktualnosci from './components/Welcome/Aktualnosci';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {

  render() {

    return (
        <HashRouter>
          <div>
            <Nav />
            <Hero />
            <Switch>
                <Route exact path='/' component={Welcome} />
                <Route path='/test' component={Education} />
                <Route path='/Realizacje' component={Realizacje} />
                <Route path='/Aktualnosci' component={Aktualnosci} />

            </Switch>
            <Footer />
            <Copyright />

          </div>

        </HashRouter>
      );
  }
}

export default App