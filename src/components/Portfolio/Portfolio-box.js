import React, {Component} from 'react';
import PortfolioItem from './Portfolio-item';

class PortfolioBox extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

        render() {
            let RenderBoxs = this.props.data.map((el, i) => <PortfolioItem
                                                                 key={i}
                                                                 name={el.name}
                                                                 img={el.img}
                                                                 customer={el.customer}
                                                                 location={el.location}
                                                                 area={el.area}
                                                                 value={el.value}
                                                                 mouseEnter={this.props.mouseEnter.bind(this, el.id)}
                                                                 mouseLeave={this.props.mouseLeave.bind(this, el.id)}
                                                                 isHover={this.props.isHover(el.id)}
                                                />
                                        )
        return(

                <div className="d-flex flex-wrap justify-content-around justify-content-xl-between ds-portfolio">
                    {RenderBoxs}
                </div>

    )}};
    export default PortfolioBox;