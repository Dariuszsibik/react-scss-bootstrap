import React from 'react';
import Mapa from '../../images/pages/mapa.jpg';

const AboutContact = () => (

        <React.Fragment>
            <h4 className="ds-contact text-uppercase text-center">Napisz do nas</h4>
            <div className="row">
                <div className="col-lg-6">
                    <div className="mb-5 mb-lg-0 ds-contact-form">
                        <h4 className="text-uppercase text-white ds-contact-form-header">Formularz kontaktowy</h4>
                        <form className="ds-form" action="">
                            <div className="row">
                                <div className="col-sm-6 ds-form-group">
                                    <label htmlFor="name" className="text-white">Imię i nazwisko</label>
                                    <input className="form-control form-control-sm ds-contact-form-control" type="text" id="name"/>
                                </div>
                                <div className="col-sm-6 ds-form-group">
                                    <label htmlFor="email" className="text-white">Adres email</label>
                                    <input className="form-control form-control-sm ds-contact-form-control" type="text" id="email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ds-form-group">
                                    <label className="text-white" for="msg">Treść wiadomości</label>
                                    <textarea className="form-control ds-contact-form-control" id="msg" cols="30" rows="2"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary text-white text-uppercase ds-contact-form-btn">Wyślij formularz</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 text-lg-right">
                    <img className="img-fluid" src={Mapa} alt="lokalizacja naszej firmy" />
                </div>
            </div>
        </React.Fragment>

    );
    export default AboutContact;