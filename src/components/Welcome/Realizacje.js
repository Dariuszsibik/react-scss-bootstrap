import React from 'react';
import Uslugi from './Uslugi.js';
import RealizacjeTitle1 from '../../images/portfolio/realizacja-1.jpg';
import RealizacjeChild1 from '../../images/portfolio/realizacje-intro-1.jpg';
import RealizacjeChild2 from '../../images/portfolio/realizacje-intro-2.jpg';
import RealizacjeChild3 from '../../images/portfolio/realizacje-intro-3.jpg';

const Realizacje = () => (

        <React.Fragment>
        <section className="ds-front-page-portfolio ds-alternate-bg">
            <div className="container">
                <div className="ds-section-header">
                    <h2 className="text-uppercase">Nasze realizacje</h2>
                    <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="ds-portfolio-box featured">
                            <div className="ds-portfolio-box-img ds-portfolio-img-overlay">
                                <img className="img-fluid" src={RealizacjeTitle1} alt="Realizacja 1"/>
                            </div>
                            <div className="text-center text-white ds-portfolio-box-text">
                                <h3 className="text-uppercase ds-portfolio-box-title">Najnowszy projekt</h3>
                                <p className="d-none d-md-block">lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum </p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-xl-block">
                        <div className="d-flex justify-content-between flex-xl-wrap">
                            <img className="img-fluid" src={RealizacjeChild1} alt="Realizacja" />
                            <img className="img-fluid" src={RealizacjeChild2} alt="Realizacja" />
                            <img className="img-fluid ds-front-page-portfolio-last" src={RealizacjeChild3} alt="Realizacja" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Uslugi/>
        </React.Fragment>

    );
    export default Realizacje;