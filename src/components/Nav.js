import React, { Component } from 'react';
import '../scss/nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <h2>Red</h2>
                <button className="btn btn-primary">Witaj</button>
            </div>
        )
    }
}
export default Nav;