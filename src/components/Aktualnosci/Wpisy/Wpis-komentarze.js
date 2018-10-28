import React from 'react';
import Odpowiedz from '../../../images/ui/reply-arrow.png';
import Avatar from '../../../images/ui/user-avatar.png';

const Komentarz = () => (

                    <div className="ds-comments">
                        <h4 className="ds-comments-header">Komentarze (2)</h4>
                        <div className="media ds-comment">
                                <div className="d-flex align-items-center justify-content-center text-center bg-primary ds-comment-avatar">
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <div className="media-body ds-text-small">
                                    <div className="ds-comment-meta">
                                        <span className="ds-comment-username">Dariusz Sibik</span><br/>
                                        <span className="ds-comment-username">25 Kwiecień 2018 | 20:03</span>
                                    </div>
                                    <div className="d-flex align-items-start ds-comment-content">
                                        <p className="ds-comment-text">Quis excepteur est eu aliqua nulla. Cupidatat ad culpa amet anim irure veniam commodo pariatur id et. Deserunt amet aliqua eu in anim incididunt ex mollit. Aliqua amet culpa labore eu. Sint sit mollit amet ullamco deserunt mollit elit et quis Lorem dolore. Duis fugiat laboris aliquip cillum officia excepteur magna do. Elit do esse reprehenderit do sint occaecat do est dolore sunt consequat adipisicing esse dolore.
                                        Mollit reprehenderit aliquip nostrud pariatur fugiat velit ad enim cupidatat aute. Sint culpa ea eu labore duis amet incididunt laborum pariatur id aliquip. Dolor culpa ea incididunt et amet velit irure labore. Excepteur cillum voluptate laborum officia pariatur dolore.</p>
                                        <img className="align-self-center" src={Odpowiedz} alt="odpowiedz" />
                                    </div>
                                            <div className="media ds-comment">
                                                    <div className="d-flex align-items-center justify-content-center text-center bg-primary ds-comment-avatar">
                                                        <img src={Avatar} alt="avatar" />
                                                    </div>
                                                    <div className="media-body ds-text-small">
                                                        <div className="ds-comment-meta">
                                                            <span className="ds-comment-username">Jan Kowalski</span><br/>
                                                            <span className="ds-comment-username">26 Kwiecień 2018 | 18:16</span>
                                                        </div>
                                                        <div className="d-flex align-items-start ds-comment-content">
                                                            <p className="ds-comment-text">Quis excepteur est eu aliqua nulla. Cupidatat ad culpa amet anim irure veniam commodo pariatur id et. Deserunt amet aliqua eu in anim incididunt ex mollit. Aliqua amet culpa labore eu. Sint sit mollit amet ullamco deserunt mollit elit et quis Lorem dolore. Duis fugiat laboris aliquip cillum officia excepteur magna do. Elit do esse reprehenderit do sint occaecat do est dolore sunt consequat adipisicing esse dolore.
                                                            Mollit reprehenderit aliquip nostrud pariatur fugiat velit ad enim cupidatat aute. Sint culpa ea eu labore duis amet incididunt laborum pariatur id aliquip. Dolor culpa ea incididunt et amet velit irure labore. Excepteur cillum voluptate laborum officia pariatur dolore.</p>
                                                            <img className="align-self-center" src={Odpowiedz} alt="odpowiedz" />
                                                        </div>
                                                    </div>
                                            </div>
                                </div>
                        </div>
                    </div>

    );
    export default Komentarz;