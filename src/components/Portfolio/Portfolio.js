import React from 'react';
import PortfolioNav from './Portfolio-nav';
import PortfolioBox from './Portfolio-box';
import Pagination from '../Pagination';

const Portfolio = () => (

            <div className="ds-portfolio-page">
                <div className="container">
                    <PortfolioNav />
                    <PortfolioBox data={data.portfolio.total} />
                    <Pagination />
                </div>
            </div>

    );
    export default Portfolio;

    const data = {
        portfolio: {
          total: [
            {
                id: 1,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-1.jpg",
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"
            },
            {
                id: 2,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-2.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"            },
            {
                id: 3,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-3.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"            },
            {
                id: 4,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-3.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"            },
            {
                id: 5,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-1.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"            },
            {
                id: 6,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-2.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"           },
          ]
        }
      }