import React from 'react';
import Aktualnosci from './Aktualnosci';
import Realizacje from './Realizacje';
import Uslugi from './Uslugi';
import WelcomeImg from '../../images/pages/front-page-welcome.png';
import IkonaWnetrz from '../../images/projekt-wnetrz-ikona.png';
import IkonaLokale from '../../images/projekt-lokale-ikona.png';
import IkonaMebli from '../../images/projekt-mebli-ikona.png';
import IkonaZieleni from '../../images/projekt-zielen-ikona.png';

const Welcome = () => (

        <section className="ds-front-page-welcome">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <span className="text-muted text-uppercase ds-text-small ds-page-intro-subheader">Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit.</span>
                        <h2 className="text-uppercase ds-page-intro-header">Witaj na <span className="text-primary">naszej
                                stronie</span></h2>
                        <div className="ds-hr ds-page-intro-rule"></div>
                        <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus nemo
                            cumque, numquam sint error fuga esse dolorem repellat! Molestias dolore veniam ullam voluptas,
                            animi eaque totam et commodi eum.</p>
                        <div className="d-none d-md-flex align-items-center text-uppercase ds-services-group ds-text-small">
                            <div className="ds-services-item active">
                                <a href="https://dariuszsibik.github.io/react-scss-bootstrap/">
                                    <img className="d-block mx-auto" src={IkonaWnetrz} alt="usługa" />
                                    <span className="d-block ds-services-item-title">Projektowanie wnętrz</span>
                                </a>
                            </div>
                            <div className="ds-services-item">
                                <a href="https://dariuszsibik.github.io/react-scss-bootstrap/">
                                    <img className="d-block mx-auto" src={IkonaMebli} alt="usługa" />
                                    <span className="d-block ds-services-item-title">Projektowanie wnętrz</span>
                                </a>
                            </div>
                            <div className="ds-services-item">
                                <a href="https://dariuszsibik.github.io/react-scss-bootstrap/">
                                    <img className="d-block mx-auto" src={IkonaLokale} alt="usługa" />
                                    <span className="d-block ds-services-item-title">Projektowanie wnętrz</span>
                                </a>
                            </div>
                            <div className="ds-services-item">
                                <a href="https://dariuszsibik.github.io/react-scss-bootstrap/">
                                    <img className="d-block mx-auto" src={IkonaZieleni} alt="usługa" />
                                    <span className="d-block ds-services-item-title">Projektowanie wnętrz</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-5">
                        <img className="img-fluid" src={WelcomeImg} alt="Witam" />>
                    </div>
                </div>
            </div>
            <Aktualnosci/>
            <Realizacje/>
            <Uslugi/>
        </section>

    );
    export default Welcome;