import React from 'react';
import Produkt1 from '../../images/pages/product-1-sm.png';
import Produkt2 from '../../images/pages/product-2-sm.png';
import Produkt3 from '../../images/pages/product-3-sm.png';
import Produkt5 from '../../images/pages/product-5-sm.png';
import Produkt6 from '../../images/pages/product-6-sm.png';
import Produkt8 from '../../images/pages/product-8-sm.png';
import Icon1 from '../../images/ui/product-item-icon-1.png';
import Icon2 from '../../images/ui/product-item-icon-2.png';
import Icon3 from '../../images/ui/product-item-icon-3.png';
import Icon4 from '../../images/ui/product-item-icon-4.png';
import Ocena1 from '../../images/ui/stars.png'

import {NavLink} from 'react-router-dom';

const ProductList = () => (

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
                    <div className="ds-product-item active">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt2} alt="zdjęcie produktu" />
                        </NavLink>
                        <div className="d-flex flex-column ds-product-item-icons">
                            <span className="d-flex justify-content-center bg-primary ds-product-item-icon" >
                                <img className="align-self-center" src={Icon1} alt="akcja1" />
                            </span>
                            <span className="d-flex justify-content-center ds-product-item-icon" >
                                <img className="align-self-center" src={Icon2} alt="akcja2" />
                            </span>
                            <span className="d-flex justify-content-center ds-product-item-icon" >
                                <img className="align-self-center" src={Icon3} alt="akcja3" />
                            </span>
                            <span className="d-flex justify-content-center ds-product-item-icon" >
                                <img className="align-self-center" src={Icon4} alt="akcja4" />
                            </span>
                        </div>
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

                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="ds-product-item">
                        <NavLink to="/product" className="d-flex justify-content-center ds-product-item-img">
                            <img className="align-self-center" src={Produkt6} alt="zdjęcie produktu" />
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
                            <img className="align-self-center" src={Produkt8} alt="zdjęcie produktu" />
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
    export default ProductList;