import React, { Component } from 'react';
import './scss/index.scss'
import Nav from './components/shared/Nav.js';
import Hero from './components/shared/Hero.js';
import Footer from './components/shared/Footer.js';
import Copyright from './components/shared/Copyright';
import Welcome from './components/welcome/Welcome';
import Services from './components/services/Services';
import News from './components/news/News';
import Entry from './components/news/entry/Entry';
import About from './components/about/About.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Shop from './components/shop/Shop.js';
import Product from './components/shop/product/Product.js';

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
                <Route path='/realizacje'  component={() => <Portfolio site={'portfolio'} />} />
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