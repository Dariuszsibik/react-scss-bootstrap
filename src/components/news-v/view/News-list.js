import React from 'react';
import DateIcon from '../../../images/ui/date-icon.png';

import {NavLink} from 'react-router-dom';

const List = ({ date, title, description, img }) => (
    <div className="ds-post-item">
            <div className="ds-post-box">
                <div className="text-center bg-primary d-flex align-items-center ds-post-box-date">
                    <div className="mx-auto ds-post-box-date-body">
                        <img className="d-none d-md-block mx-auto" src={DateIcon} alt="Kalendarz" />
                        <span className="text-white d-block ds-post-box-date-value">{date}</span>
                    </div>
                </div>
                <div className="ds-post-box-body">
                    <div className="ds-post-box-img">
                        <img className="img-fluid" src={img} alt="post 1" />
                    </div>
                </div>
            </div>
            <NavLink to="first" className="d-block ds-post-item-link">
                <h2 className="text-uppercase ds-post-item-title">{title}</h2>
            </NavLink>
            <p>{(description.slice(0,500))}</p>
            <NavLink to="/first" className="btn btn-primary btn-sm text-uppercase text-white ds-post-item-more">Zobacz więcej</NavLink>
            <div className="ds-hr"></div>
        </div>
    );
    export default List;