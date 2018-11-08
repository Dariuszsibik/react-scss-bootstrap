import React from 'react';

const Archiwum = (props) => (

                    <div className="ds-post-widget">
                        <h4 className="text-uppercase ds-post-widget-header">Archiwum</h4>
                        <div className="w-75 ds-hr"></div>
                        <div className="ds-post-widget-archive">
                            {props.years.map((el, i) => <h5 key={i} className="ds-post-widget-archive-header">{el}</h5>)}
                            <ul className="list-unstyled ds-post-widget-archive-list">
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Styczeń <span className="float-righ">(10)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Luty <span className="float-righ">(23)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Marzec <span className="float-righ">(19)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Kwiecień <span className="float-righ">(13)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Maj <span className="float-righ">(12)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Czerwiec <span className="float-righ">(11)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Lipiec <span className="float-righ">(14)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Sierpień <span className="float-righ">(16)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Wrzesień <span className="float-righ">(17)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Pażdziernik <span className="float-righ">(19)</span></a>
                                </li>
                                <li className="ds-post-widget-list-item">
                                    <a href="/" className="ds-post-widget-link">Listopad <span className="float-righ">(9)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

    );
    export default Archiwum;