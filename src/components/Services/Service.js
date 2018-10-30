import React, {Component} from 'react';
import Uslugi1 from '../../images/service-1.jpg';

class Service extends Component {
    render() {
        return (

            <div className="ds-services-box">
                <div className="d-flex ds-services-box-top">
                    <div className="ds-services-box-shadow"></div>
                    <div className="d-flex ds-services-box-img">
                        <img src={Uslugi1} alt="usługa 1"/>
                    </div>
                    <div className="text-uppercase ds-services-box-title">
                        <span className="d-block ds-services-box-header">{this.props.name}</span>
                        <span className="d-blick text-muted ds-text-small">Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing. </span>
                    </div>
                </div>
                <div className="d-block ds-services-box-text">
                    <p className="ds-text-small">Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu</p>
                </div>
            </div>

        )}};
    export default Service;