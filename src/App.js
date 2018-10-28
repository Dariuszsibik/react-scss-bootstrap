import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome/Welcome';
import Aktualnosci from './components/Aktualnosci/Aktualnosci';
import Wpis from './components/Aktualnosci/Wpisy/Wpis';
import About from './components/About/About.js';
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
                <Route path='/realizacje' component={Aktualnosci} />
                <Route path='/usluga' component={Aktualnosci} />
                <Route path='/aktualnosci' component={Aktualnosci} />
                <Route path='/first' component={Wpis} />
                <Route path='/second' component={Wpis} />
                <Route path='/sklep' component={Aktualnosci} />
                <Route path='/onas' component={About} />
            </Switch>
            <Footer />
            <Copyright />

          </div>

        </HashRouter>
      );
  }
}

export default App