import React, {Component} from 'react';
import PortfolioBox from './containers/Portfolio-box';
import PortfolioLatest from './containers/Portfolio-latest';

const API_URL = `${
    process.env.PUBLIC_URL
  }/api/portfolio.json`;

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            hoverPortfolio: 0,
            dataResult: [],
            dataLates: []
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(res =>  res.json())
            .then(json => {
                this.setState({ dataResult: json.result, dataLates: json.latest, loading: false });
            })
            .catch(error => {
                this.setState({ error });
            });
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
                    <PortfolioBox
                        data={this.state.dataResult}
                        mouseEnter={this.mouseEnter.bind(this)}
                        mouseLeave={this.mouseLeave.bind(this)}
                        isHover={this.isHover.bind(this)}
                    />
                )

            case 'welcome':
                return(
                    <PortfolioLatest
                        data={this.state.dataLates}
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