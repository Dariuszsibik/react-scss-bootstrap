import React from 'react';
import AboutTop from './About-top.js';
import AboutContent from './About-content.js';
import AboutContact from './About-contact.js';

const About = () => (

        <div className="ds-about-page">
            <div className="container">
                <AboutTop/>
                <AboutContent/>
                <div className="ds-hr"></div>
                <AboutContact/>
            </div>
        </div>

    );
    export default About;