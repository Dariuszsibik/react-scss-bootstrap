import React, { Component } from 'react';
import Design from '../images/design-subheader.png';

class Hero extends Component {
    render() {
        return (
                <div className="jumbotron text-center ds-hero">
                    <div className="container ds-hero-content">
                        <h1 className="text-white ds-hero-header">Tekst</h1>
                        <img className="img-fluid ds-hero-subheader" src={Design} alt="" ></img>
                    </div>
                </div>
        )
    }
}
export default Hero;