import React from 'react';
import Aktualnosci1 from '../../images/pages/aktualnosci-front-1.jpg';
import Aktualnosci2 from '../../images/pages/aktualnosci-front-2.jpg';
import DateIcon from '../../images/ui/date-icon.png';

const Aktualnosci = () => (

        <section className="ds-front-page-blog ds-alternate-bg">
            <div className="container">
                <div className="ds-section-header">
                    <h2 className="text-uppercase">Aktualności</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, dolor?</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ds-post-box">
                            <div className="text-center bg-primary d-flex align-items-center ds-post-box-date">
                                <div className="mx-auto ds-post-box-date-body">
                                    <img className="d-none d-md-block mx-auto" src={DateIcon} alt="Kalendarz"/>
                                    <span className="text-white d-block ds-post-box-date-value">23 WRZ 2018</span>
                                </div>
                            </div>
                            <div className="ds-post-box-body">
                                <div className="ds-post-box-img">
                                    <img className="img-fluid" src={Aktualnosci1} alt="post 1"/>
                                </div>
                                <div className="text-white ds-post-box-content">
                                    <div className="ds-post-box-content-inner">
                                        <h3 className="text-uppercase ds-post-box-title">Lorem, ipsum</h3>
                                        <p className="ds-post-box-text ds-text-small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi deleniti molestias beatae voluptate a animi, ipsam, delectus consequatur dolor possimus quaerat iste! Repellendus, provident culpa? Sunt assumenda dolore nihil?</p>
                                        <a className="text-primary text-uppercase ds-post-box-link" href="/">Zobacz więcej</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ds-post-box">
                            <div className="text-center bg-primary d-flex align-items-center ds-post-box-date">
                                <div className="mx-auto ds-post-box-date-body">
                                    <img className="d-none d-md-block mx-auto" src={DateIcon} alt="Kalendarz"/>
                                    <span className="text-white d-block ds-post-box-date-value">28 LIS 2018</span>
                                </div>
                            </div>
                            <div className="ds-post-box-body">
                                <div className="ds-post-box-img">
                                    <img className="img-fluid" src={Aktualnosci2} alt="post 2"/>
                                </div>
                                <div className="text-white ds-post-box-content">
                                    <div className="ds-post-box-content-inner">
                                        <h3 className="text-uppercase ds-post-box-title">Lorem, ipsum</h3>
                                        <p className="ds-post-box-text ds-text-small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi deleniti molestias beatae voluptate a animi, ipsam, delectus consequatur dolor possimus quaerat iste! Repellendus, provident culpa? Sunt assumenda dolore nihil?</p>
                                        <a className="text-primary text-uppercase ds-post-box-link" href="/">Zobacz więcej</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
    export default Aktualnosci;