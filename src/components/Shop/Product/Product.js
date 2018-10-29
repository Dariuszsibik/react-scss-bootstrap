import React from 'react';
import Search from '../Search.js';
import ShopPagination from '../Shop-paginacja';
import Prompt from './Product-prompt';
import ProductImg from '../../../images/pages/product-big.jpg';
import ProductRating from '../../../images/ui/stars.png';


const Product = () => (

        <div className="ds-product-page">
                <div className="container">
                    <div className="ds-product-page-data">
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid ds-product-page-img" src={ProductImg} alt="Produkt"/>
                            </div>
                            <div className="col-lg-6">
                                <h4 className="text-uppercase ds-product-name ds-text-large">Nazwa produktu</h4>
                                <div className="d-flex align-items-center justify-content-between ds-product-price-box">
                                    <span className="ds-product-price ds-text-large">68zł</span>
                                    <img src={ProductRating} alt="ocena produktu"/>
                                </div>
                                <div className="ds-hr"></div>
                                <p className="ds-product-page-short-desc">In eiusmod duis elit ex duis minim aute non exercitation aliqua minim ut aliquip velit. Labore id nisi anim adipisicing incididunt anim esse ad excepteur commodo. Velit esse sit est elit consequat enim sint minim in nulla.</p>
                                <div className="ds-product-page-quantity">
                                    <span className="text-uppercase ds-product-page-quantity-label">Ilość sztuk</span>
                                    <input className="text-center ds-product-page-quantity-input" type="number" defaultValue="1"/>
                                </div>
                                <button className="btn btn-primary text-white text-uppercase ds-product-page-add-to-cart">Dodaj do koszyka</button>
                            </div>
                        </div>
                    </div>
                    <div className="ds-hr ds-product-page-hr"></div>
                    <div className="ds-product-page-desc">
                        <div className="row">
                            <div className="col">
                                <ul className="nav nav-tabs text-uppercase ds-product-page-desc-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/">Opis produktu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Opinie o produkcie</a>
                                    </li>
                                </ul>
                                <div className="ds-product-page-desc-text">
                                    <h4 className="ds-text-large">lorem ipsum dolor sit Lorem Ipsum.</h4>
                                    <p>Aute amet est cupidatat dolore consequat quis aliquip proident ea deserunt. Consequat exercitation dolor labore tempor deserunt pariatur tempor exercitation adipisicing culpa enim amet. Est esse aute aliqua anim. Ad fugiat dolore sunt voluptate laboris Lorem. Fugiat ex consequat quis excepteur laboris tempor sint fugiat. Aliqua laboris tempor est quis eu nostrud pariatur dolor non exercitation amet in deserunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ds-product-page-related">
                        <h3 className="text-uppercase ds-product-page-related-header ds-text-large">Podobne produkty</h3>
                        <Prompt/>
                    </div>
                </div>
        <Search/>
        <ShopPagination/>
        </div>

    );
    export default Product;