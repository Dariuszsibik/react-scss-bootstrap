import React from 'react';
import PortfolioNav from './Portfolio-nav';
import PortfolioBox from './Portfolio-box';
import Pagination from './Portfolio-paginacja';

const Portfolio = () => (

        <div className="ds-portfolio-page">
            <div className="container">
               <PortfolioNav/>
               <PortfolioBox/>
               <Pagination/>
            </div>
        </div>

    );
    export default Portfolio;