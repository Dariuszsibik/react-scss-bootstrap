import React, { Component } from 'react';
import Nav from './components/Nav.js'
import './scss/index.scss'

class App extends Component {
/*
  constructor(){
    super();
    this.state = {
      navActive: 'about',
    };
    this.onNavClick = this.onNavClick.bind(this);
  }

    onNavClick(props) {
      this.setState({
        navActive: props
      })
      if (window.screen.width < 1200) {
        document.getElementById('navbar-toggler-content').click();
      }
    }
*/

  render() {
/*
    var section = null;
    switch (this.state.navActive) {
      case 'courses':
          section = <Courses/>;
          break;
      case 'about':
          section = <About/>;
          break;
      case 'experience':
          section = <Experience/>;
          break;
      case 'education':
          section = <Education/>;
          break;
      case 'skills':
          section = <Skills/>;
          break;
      case 'projects':
          section = <Projects/>;
          break;
      default:
          section = null;
  }
  */

    return (
      <div className="test">
        <Nav/>
      </div>
    );
  }
}

export default App