import React from 'react';
import Aktualnosci1 from '../../../images/posts/post-1.jpg';
import Aktualnosci2 from '../../../images/posts/post-2.jpg';
import DateIcon from '../../../images/ui/date-icon.png';

import {NavLink} from 'react-router-dom';

const List = () => (

                        <React.Fragment>
                            <div className="ds-post-item">
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
                                    </div>
                                </div>
                                <a className="d-block ds-post-item-link" href="/post">
                                    <h2 className="text-uppercase ds-post-item-title" >Lorem Ipsum</h2>
                                </a>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sed recusandae a animi, commodi excepturi soluta et quos harum nam facilis id quod dolore quae iure ea? Consequuntur enim dolor sint delectus culpa nihil repudiandae similique placeat odio eos ipsam consectetur illo vero itaque impedit illum eveniet nesciunt ipsa natus, nam possimus soluta cupiditate. Fugit saepe quibusdam aspernatur assumenda, nostrum, explicabo quo repudiandae delectus excepturi soluta, dolorem consequatur. Quia architecto eum sit repellendus vitae quas quos officiis ex. Hic?</p>
                                <NavLink to="/first" className="btn btn-primary btn-sm text-uppercase text-white ds-post-item-more">Zobacz więcej</NavLink>
                                <div className="ds-hr"></div>
                            </div>
                            <div className="pb-0 ds-post-item">
                                <div className="ds-post-box">
                                    <div className="text-center bg-primary d-flex align-items-center ds-post-box-date">
                                        <div className="mx-auto ds-post-box-date-body">
                                            <img className="d-none d-md-block mx-auto" src={DateIcon} alt="Kalendarz"/>
                                            <span className="text-white d-block ds-post-box-date-value">23 WRZ 2018</span>
                                        </div>
                                    </div>
                                    <div className="ds-post-box-body">
                                        <div className="ds-post-box-img">
                                            <img className="img-fluid" src={Aktualnosci2} alt="post 1"/>
                                        </div>
                                    </div>
                                </div>
                                <a className="d-block ds-post-item-link" href="/post">
                                    <h2 className="text-uppercase ds-post-item-title" >Lorem Ipsum</h2>
                                </a>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugiat sed recusandae a animi, commodi excepturi soluta et quos harum nam facilis id quod dolore quae iure ea? Consequuntur enim dolor sint delectus culpa nihil repudiandae similique placeat odio eos ipsam consectetur illo vero itaque impedit illum eveniet nesciunt ipsa natus, nam possimus soluta cupiditate. Fugit saepe quibusdam aspernatur assumenda, nostrum, explicabo quo repudiandae delectus excepturi soluta, dolorem consequatur. Quia architecto eum sit repellendus vitae quas quos officiis ex. Hic?</p>
                                <NavLink to="/second" className="btn btn-primary btn-sm text-uppercase text-white ds-post-item-more">Zobacz więcej</NavLink>

                            </div>
                        </React.Fragment>

    );
    export default List;