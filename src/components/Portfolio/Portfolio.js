import React, {Component} from 'react';
import PortfolioNav from './Portfolio-nav';
import PortfolioBox from './Portfolio-box';
import Pagination from '../Pagination';
import PortfolioLatest from './Portfolio-latest';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            hoverPortfolio: 0,
        };
    }

    isHover = (id) => {
        return this.state.hoverPortfolio === id;
    }
    mouseEnter(id) {
        this.setState({ hoverPortfolio: id });
    }

    mouseLeave() {
        this.setState({ hoverPortfolio: 0 });
    }


    render() {
        switch (this.props.site) {
            case 'portfolio':
                return(
                    <div className="ds-portfolio-page">
                        <div className="container">
                            <PortfolioNav />
                            <PortfolioBox
                                    data={data.portfolio.total}
                                    mouseEnter={this.mouseEnter.bind(this)}
                                    mouseLeave={this.mouseLeave.bind(this)}
                                    isHover={this.isHover.bind(this)}
                            />
                            <Pagination />
                        </div>
                    </div>
                )

            case 'welcome':
                return(
                    <PortfolioLatest
                        data={data.portfolio.latest}
                        mouseEnter={this.mouseEnter.bind(this)}
                        mouseLeave={this.mouseLeave.bind(this)}
                        isHover={this.isHover.bind(this)}
                    />

                )
            default:
               return(<div>Portfolio</div>)
        }
    }
};
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
                value: "900 000zł"
            },
            {
                id: 3,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-3.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"
            },
            {
                id: 4,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-3.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"
            },
            {
                id: 5,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-1.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"
            },
            {
                id: 6,
                name: "Najnowszy projekt",
                customer: "XYZ Construction",
                img: "./images/portfolio/portfolio-2.jpg" ,
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł"
            },
          ],

          latest: {
                name: 'Najnowszy projekt',
                img: './images/portfolio/realizacja-1.jpg',
                customer: "XYZ Construction",
                location: "Warszawa",
                area: "140m2",
                value: "900 000zł",
                description: "lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum",
                intro: [
                    './images/portfolio/realizacje-intro-1.jpg',
                    './images/portfolio/realizacje-intro-2.jpg',
                    './images/portfolio/realizacje-intro-3.jpg'
                ]
            },
      }
    }