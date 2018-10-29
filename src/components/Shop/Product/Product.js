import React from 'react';
import Search from '../Search.js';
import ShopPagination from '../Shop-paginacja';
import Prompt from './Product-prompt';


const Product = () => (

        <div className="ds-product-page">
                <div className="container">
                    <div className="ds-product-page-data">
                        Dane produktu
                    </div>
                    <div className="ds-hr"></div>
                    <div className="ds-product-page-desc">
                        Opis
                    </div>
                    <div className="ds-product-page-related">
                        <h3 className="text-uppercase ds-product-page-related-header">Podobne produkty</h3>
                        <Prompt/>
                    </div>
                </div>
        <Search/>
        <ShopPagination/>
        </div>

    );
    export default Product;