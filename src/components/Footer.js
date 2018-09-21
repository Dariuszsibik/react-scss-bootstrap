import React, { Component } from 'react';
import FooterIconEmail from '../images/ui/contact-footer-icon-email.png';
import FooterIconPhone from '../images/ui/contact-footer-icon-phone.png';
import FooterIconPin from '../images/ui/contact-footer-icon-pin.png';


class Footer extends Component {
    render() {
        return (
                <div className="ds-footer-top">
                    <div className="container ds-footer-top-content">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 mb-5">
                                <h4 className="text-uppercase text-white">O nas</h4>
                                <p className="ds-footer-text ds-footer-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatum, ratione ducimus sunt voluptates rem perspiciatis tempora sint minus provident, ipsum voluptas esse, fugiat autem temporibus vitae eum nobis! Necessitatibus.</p>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5">
                                <h4 className="text-uppercase text-white">Nawigacja</h4>
                                <ul className="list-unstyled">
                                            <li><a className="ds-footer-text" href="/">Regulamin serwisu</a></li>
                                            <li><a className="ds-footer-text" href="/">Logowanie</a></li>
                                            <li><a className="ds-footer-text" href="/">Wsparcie serwisu</a></li>
                                            <li><a className="ds-footer-text" href="/">FAQ & POMOC</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5">
                                <h4 className="text-uppercase text-white">Kontakt</h4>
                                <ul className="list-unstyled ds-footer-text ds-footer-contact-list">
                                    <li className="ds-footer-contact-item">
                                        <span className="mr-2"><img src={FooterIconPin} alt="Adres" /> Kraków </span>
                                    </li>
                                    <li className="ds-footer-contact-item">
                                        <span className="mr-2"><img src={FooterIconPhone} alt="Adres" /> 883-739-377 </span>
                                    </li>
                                    <li className="ds-footer-contact-item">
                                        <span className="mr-2"><img src={FooterIconEmail} alt="Adres" /> sibikdariusz@gmail.com </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5">
                                <h4 className="text-uppercase text-white">Newsletter</h4>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Footer;