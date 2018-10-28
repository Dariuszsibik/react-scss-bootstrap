import React from 'react';
import PortfolioNav from './Portfolio-nav';
import PortfolioBox from './Portfolio-box';

const Portfolio = () => (

        <div className="ds-pportfolio-page">
            <div className="container">
               <PortfolioNav/>
               <PortfolioBox/>
            </div>
        </div>

    );
    export default Portfolio;