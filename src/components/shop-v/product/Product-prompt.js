import React from 'react';
import Produkt2 from '../../../images/pages/product-2-sm.png';
import Produkt3 from '../../../images/pages/product-3-sm.png';
import Produkt1 from '../../../images/pages/product-1-sm.png';
import Produkt5 from '../../../images/pages/product-5-sm.png';
import Ocena1 from '../../../images/ui/stars.png'

import {NavLink} from 'react-router-dom';


const Prompt = () => (

        <div className="container">
            <div className="row ds-products">

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="ds-product-item">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt1} alt="zdjęcie produktu" />
                        </NavLink>
                        <NavLink to="/product" className="ds-product-item-link" >
                            <h5 className="text-uppercase ds-product-name">Nazwa produkt</h5>
                        </NavLink>
                        <p className="ds-text-small ds-product-item-desc">Exercitation ipsum veniam ea do veniam do et. Tempor in labore occaecat laboris voluptate.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="ds-product-price">68zł</span>
                            <img src={Ocena1} alt="ocena produktu"/>
                        </div>
                    </div>
                </div>

                
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="ds-product-item">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt2} alt="zdjęcie produktu" />
                        </NavLink>
                        <NavLink to="/product" className="ds-product-item-link" >
                            <h5 className="text-uppercase ds-product-name">Nazwa produkt</h5>
                        </NavLink>
                        <p className="ds-text-small ds-product-item-desc">Exercitation ipsum veniam ea do veniam do et. Tempor in labore occaecat laboris voluptate.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="ds-product-price">68zł</span>
                            <img src={Ocena1} alt="ocena produktu"/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="ds-product-item">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt3} alt="zdjęcie produktu" />
                        </NavLink>
                        <NavLink to="/product" className="ds-product-item-link" >
                            <h5 className="text-uppercase ds-product-name">Nazwa produkt</h5>
                        </NavLink>
                        <p className="ds-text-small ds-product-item-desc">Exercitation ipsum veniam ea do veniam do et. Tempor in labore occaecat laboris voluptate.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="ds-product-price">68zł</span>
                            <img src={Ocena1} alt="ocena produktu"/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="ds-product-item">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt5} alt="zdjęcie produktu" />
                        </NavLink>
                        <NavLink to="/product" className="ds-product-item-link" >
                            <h5 className="text-uppercase ds-product-name">Nazwa produkt</h5>
                        </NavLink>
                        <p className="ds-text-small ds-product-item-desc">Exercitation ipsum veniam ea do veniam do et. Tempor in labore occaecat laboris voluptate.</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="ds-product-price">68zł</span>
                            <img src={Ocena1} alt="ocena produktu"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
    export default Prompt;                
                
                
                
                
                
                
                