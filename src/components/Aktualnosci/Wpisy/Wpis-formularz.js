import React from 'react';

const Formularz = () => (

                    <div className="ds-comments-form">
                        <form className="ds-form" action="#">
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label for="name">Twoje Imię</label>
                                    <input className="form-control ds-comments-form-control" type="text" id="name"/>        
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="email">Adres email</label>
                                    <input className="form-control ds-comments-form-control" type="text" id="email"/>        
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="url">Twoja strona</label>
                                    <input className="form-control ds-comments-form-control" type="text" id="url"/>        
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label for="comment">Twój komentarz</label>
                                    <textarea className="form-control ds-comments-form-control" id="comment" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-lg text-white ds-comments-form-btn">Wyślij komentarz</button>
                        </form>
                    </div>

    );
export default Formularz;