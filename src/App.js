import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import Copyright from './components/Copyright';
import Welcome from './components/Welcome/Welcome';
import Services from './components/Services/Services';
import News from './components/News/News';
import Entry from './components/News/Entry/Entry';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Shop from './components/Shop/Shop.js';
import Product from './components/Shop/Product/Product.js';
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
                <Route exact path='/welcome' component={Welcome} />
                <Route path='/realizacje' component={Portfolio} />
                <Route path='/usluga' component={Services} />
                <Route path='/aktualnosci' component={News} />
                <Route path='/first' component={Entry} />
                <Route path='/second' component={Entry} />
                <Route path='/sklep' component={Shop} />
                <Route path='/product' component={Product} />
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