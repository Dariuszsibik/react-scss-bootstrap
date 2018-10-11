import React, { Component } from 'react';
import Design from '../images/design-subheader.png';
import SocialIconFb from '../images/social/social-icon-fb.png';
import SocialIconLin from '../images/social/social-icon-plus.png';
import SocialIconGit from '../images/social/social-icon-twit.png';


class Hero extends Component {
    render() {
        return (

                <div className="jumbotron text-center ds-hero">
                    <div className="container ds-hero-content">
                        <h1 className="text-white ds-hero-header">Tekst</h1>
                        <img className="img-fluid ds-hero-subheader" src={Design} alt=""></img>
                        <div className="d-flex justify-content-center">
                            <span className="bg-primary text-center ds-social-box">
                                <a href="https://www.facebook.com/dariusz.sibik">
                                    <img src={SocialIconFb} alt="social" />
                                </a>
                            </span>
                            <span className="bg-primary text-center ds-social-box">
                                <a href="https://www.facebook.com/dariusz.sibik">
                                    <img src={SocialIconLin} alt="social" />
                                </a>
                            </span>
                            <span className="bg-primary text-center ds-social-box">
                                <a href="https://www.facebook.com/dariusz.sibik">
                                    <img src={SocialIconGit} alt="social" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

        )
    }
}
export default Hero;