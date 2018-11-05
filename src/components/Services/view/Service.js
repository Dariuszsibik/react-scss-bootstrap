import React from 'react';

const Service = (props) => (
        <div className="col-md-6 col-lg-4">
            <div className="ds-services-box" onClick={props.setActiveService }>
                <div className="d-flex ds-services-box-top">
                    <div className={props.isActive? 'ds-services-box-shadow active' : 'ds-services-box-shadow' }></div>
                    <div className="d-flex ds-services-box-img">
                        <img src={props.img} alt="usługa 1" />
                    </div>
                    <div className="text-uppercase ds-services-box-title">
                        <span className={props.isActive ? 'd-block ds-services-box-header text-primary' :
                            'd-block ds-services-box-header' }>{props.name}</span>
                        <span className="d-blick text-muted ds-text-small">{props.description} </span>
                    </div>
                </div>
                <div className="d-block ds-services-box-text">
                    <p className={props.isActive ? 'ds-text-small active' : 'd-none' }>{props.text}</p>
                </div>
            </div>
        </div>
);
export default Service;