import React from 'react';
import WelcomeImg from '../images/pages/front-page-welcome.png';

const Welcome = () => (
    <section className="ds-front-page-welcome">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <span className="text-muted text-uppercase ds-text-small ds-page-intro-subheader">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                    <h2 className="text-uppercase ds-page-intro-header">Witaj na <span className="text-primary">mojej stronie</span></h2>
                    <div className="ds-hr ds-page-intro-rule"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus nemo cumque, numquam sint error fuga esse dolorem repellat! Molestias dolore veniam ullam voluptas, animi eaque totam et commodi eum.</p>
                </div>
                <div className="col-lg-6 pl-5">
                    <img className="img-fluid" src={WelcomeImg} alt="Witam"/>>
                </div>
            </div>
        </div>
    </section>
    );
    export default Welcome;