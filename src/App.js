import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome/Welcome';
import Aktualnosci from './components/Aktualnosci/Aktualnosci';
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
                <Route exact path='/home' component={Welcome} />
                <Route path='/realizacje' component={Aktualnosci} />
                <Route path='/usluga' component={Aktualnosci} />
                <Route path='/aktualnosci' component={Aktualnosci} />
                <Route path='/sklep' component={Aktualnosci} />
                <Route path='/onas' component={Aktualnosci} />
            </Switch>
            <Footer />
            <Copyright />

          </div>

        </HashRouter>
      );
  }
}

export default App