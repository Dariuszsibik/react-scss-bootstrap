import React from 'react';
import AboutImg from '../../images/pages/about-img.png';

const AboutTop = () => (

            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6">
                        <span className="text-muted text-uppercase ds-text-small ds-page-intro-subheader">Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit.</span>
                        <h2 className="text-uppercase ds-page-intro-header">Poznaj <span className="text-primary">Naszą
                                Firmę</span></h2>
                        <div className="ds-hr ds-page-intro-rule"></div>
                        <p>Sit aliquip ipsum ex Lorem aliquip ullamco aliqua nisi commodo magna. Officia ad ullamco nisi proident cillum aute magna commodo incididunt et. Id cillum ad irure et reprehenderit incididunt sint. Magna cupidatat consectetur ex dolore labore labore nostrud. Ex ea ex consectetur excepteur consectetur Lorem eu esse labore eiusmod aliquip aute. In magna nulla qui Lorem in in. In in occaecat sint consequat aliquip in veniam.
                        Anim ad in occaecat aliquip velit occaecat non. Fugiat id quis quis ad adipisicing nisi sint id culpa consequat. Enim culpa tempor excepteur nulla et anim. Non incididunt velit voluptate do aute amet. Duis laboris nisi magna minim sit et id do duis eiusmod nulla pariatur est ut. Tempor ex nostrud ea aliquip eu sint elit tempor. Consectetur veniam commodo pariatur eu proident aliqua ex commodo labore voluptate.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid mt-2" src={AboutImg} alt="nasza firma"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <p>Ipsum eu qui ad duis non. Commodo irure sit adipisicing officia ut ut dolore commodo aliquip tempor et elit do proident. Officia do irure cillum commodo mollit mollit duis eiusmod adipisicing dolore tempor. Fugiat ullamco laboris nulla occaecat qui ea excepteur aliquip consectetur deserunt pariatur culpa. Elit velit laborum non nostrud culpa.</p>
                    </div>
                </div>
            </React.Fragment>

    );
    export default AboutTop;