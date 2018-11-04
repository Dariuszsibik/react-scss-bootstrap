import React, {Component} from 'react';

class Service extends Component {
    render() {

        let ServiceClassName = this.props.isActive ? 'ds-services-box-shadow active': 'ds-services-box-shadow';
        let TextClassName = this.props.isActive ? 'ds-text-small active': 'd-none';
        let NameClassName = this.props.isActive ? 'd-block ds-services-box-header text-primary': 'd-block ds-services-box-header';

        return (
            <div className="col-md-6 col-lg-4">
            <div className="ds-services-box" onClick={ this.props.onActiveTab }>
                <div className="d-flex ds-services-box-top">
                    <div className={ServiceClassName}></div>
                    <div className="d-flex ds-services-box-img">
                        <img src={this.props.img} alt="usługa 1"/>
                    </div>
                    <div className="text-uppercase ds-services-box-title">
                        <span className={NameClassName}>{this.props.name}</span>
                        <span className="d-blick text-muted ds-text-small">{this.props.description} </span>
                    </div>
                </div>
                <div className="d-block ds-services-box-text">
                    <p className={TextClassName}>{this.props.text}</p>
                </div>
            </div>
            </div>

        )}};
    export default Service;