import React from 'react';
import Portfolio1 from '../../images/portfolio/portfolio-1.jpg';
import Portfolio2 from '../../images/portfolio/portfolio-2.jpg';
import Portfolio3 from '../../images/portfolio/portfolio-3.jpg';

const PortfolioBox = () => (

                <div className="d-flex flex-wrap justify-content-around justify-content-xl-between ds-portfolio">
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img ds-portfolio-img-overlay">
                            <img className="img-fluid " src={Portfolio1} alt="Realizacja-1"/>
                        </div>
                        <div className="text-center text-white ds-portfolio-box-text">
                            <h4 className="text-uppercase ds-portfolio-box-header">Najnowszy projekt</h4>
                            <div className="w-50 mx-auto ds-hr" ></div>
                            <span className="d-block ds-portfolio-item-info">
                                <span className="text-uppercase">Klient:</span> XYZ Construction
                            </span>
                            <span className="d-block ds-portfolio-item-info">
                                <span className="text-uppercase">Lokalizacja:</span> Warszawa
                            </span>
                            <span className="d-block ds-portfolio-item-info">
                                <span className="text-uppercase">Powierzchnia:</span> 140m2
                            </span>
                            <span className="d-block ds-portfolio-item-info">
                                <span className="text-uppercase">wartość:</span> 900 000zł
                            </span>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio2} alt="Realizacja-2"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio3} alt="Realizacja-3"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio1} alt="Realizacja-1"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio2} alt="Realizacja-2"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio3} alt="Realizacja-3"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio1} alt="Realizacja-1"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio2} alt="Realizacja-2"/>
                        </div>
                    </div>
                    <div className="ds-portfolio-item">
                        <div className="ds-portfolio-box-img">
                            <img className="img-fluid" src={Portfolio3} alt="Realizacja-3"/>
                        </div>
                    </div>
                </div>

    );
    export default PortfolioBox;