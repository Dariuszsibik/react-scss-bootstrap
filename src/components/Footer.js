import React, { Component } from 'react';
import FooterIconEmail from '../images/ui/contact-footer-icon-email.png';
import FooterIconPhone from '../images/ui/contact-footer-icon-phone.png';
import FooterIconPin from '../images/ui/contact-footer-icon-pin.png';
import SocialIconFb from '../images/social/social-icon-fb.png';
import SocialIconLin from '../images/social/social-icon-plus.png';
import SocialIconGit from '../images/social/social-icon-twit.png';


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
                                        <span className="mr-2"><img src={FooterIconPin} alt="Adres" /></span>Kraków
                                    </li>
                                    <li className="ds-footer-contact-item">
                                        <span className="mr-2"><img src={FooterIconPhone} alt="Adres" /></span>883-739-377
                                    </li>
                                    <li className="ds-footer-contact-item">
                                        <span className="mr-2"><img src={FooterIconEmail} alt="Adres" /></span>sibikdariusz@gmail.com
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-around w-75">
                                    <span className="bg-primary text-center ds-social-box">
                                        <a href="https://www.facebook.com/dariusz.sibik">
                                            <img src={SocialIconFb} alt="social"/>
                                        </a>
                                    </span>
                                    <span className="bg-primary text-center ds-social-box">
                                        <a href="https://www.facebook.com/dariusz.sibik">
                                            <img src={SocialIconLin} alt="social"/>
                                        </a>
                                    </span>
                                    <span className="bg-primary text-center ds-social-box">
                                        <a href="https://www.facebook.com/dariusz.sibik">
                                            <img src={SocialIconGit} alt="social"/>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5">
                                <h4 className="text-uppercase text-white">Newsletter</h4>
                                <form action="">
                                    <div className="form-group ds-newsletter-form-group">
                                        <label className="ds-footer-text" htmlFor="email">lorem ipsum dolor sit amet</label>
                                        <input className="form-control form-control-sm w-75 ds-newsletter-form-control" type="email" id="email" placeholder="adres email"/>
                                    </div>
                                    <button className="btn btn-primary text-white text-uppercase ds-newsletter-btn">Subskrybuj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Footer;