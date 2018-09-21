import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
<div className="ds-footer-top">
    <div className="container ds-footer-top-content">
        <div className="row">
            <div className="col-md-6 col-lg-3m mb-5">
                <h4 class="text-uppercase text-white">O nas</h4>
            </div>
            <div className="col-md-6 col-lg-3m mb-5">
                <h4 class="text-uppercase text-white">Nawigacja</h4>
            </div>
            <div className="col-md-6 col-lg-3m mb-5">
                <h4 class="text-uppercase text-white">Kontakt</h4>
            </div>
            <div className="col-md-6 col-lg-3m mb-5">
                <h4 class="text-uppercase text-white">Newsletter</h4>
            </div>
        </div>
    </div>
</div>
        )
    }
}
export default Footer;