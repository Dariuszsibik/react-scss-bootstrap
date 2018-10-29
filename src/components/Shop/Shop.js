import React from 'react';
import Search from './Search.js';
import ShopList from './Shop-list';
import ShopPagination from './Shop-paginacja';

const Shop = () => (

        <div className="ds-shop-page">
                <div className="container">
                    <div class="text-center mx-auto ds-product-list-intro">
                        <span className="text-muted text-uppercase ds-text-small ds-page-intro-subheader">Lorem Ipsum dolor sit</span>
                        <h2 class="text-uppercase ds-page-intro-header">Sklep <span className="text-primary">Online</span></h2>
                        <div className="ds-hr ds-page-intro-rules"></div>
                        <p className="ds-product-list-intro-desc mb-5">Magna laborum dolor laboris laborum. Nostrud anim ipsum aliqua officia anim commodo reprehenderit. Mollit velit laboris incididunt ullamco ex adipisicing in enim proident.</p>
                    </div>
                </div>
        <Search/>
        <ShopList/>
        <ShopPagination/>
        </div>

    );
    export default Shop;