import React, {Component} from 'react';

    class PortfolioLatest extends Component {
        constructor() {
            super();
            this.state = {
            };
        }

            render() {
                let overlayClassName = this.props.isHover(1)? 'ds-portfolio-box-img ds-portfolio-img-overlay' : 'ds-portfolio-box-img';
                let textClassName = this.props.isHover(1)? 'text-center text-white ds-portfolio-box-text ' : 'd-none';
                let imgs = this.props.data.intro.map((el, i) => <img
                                                                    key={i}
                                                                    className="img-fluidimg-fluid ds-front-page-portfolio-last"
                                                                    src={el}
                                                                    alt="Realizacja"
                                                                />)
                return(

                    <div className="row">
                        <div className="col">
                            <div className="ds-portfolio-box featured" onMouseEnter={this.props.mouseEnter.bind(this, 1)} onMouseLeave={this.props.mouseLeave.bind(this, 1)}>
                                <div className={overlayClassName} >
                                    <img className="img-fluid" src={this.props.data.img} alt="Realizacja 1" />
                                </div>
                                <div className={textClassName}>
                                    <h3 className="text-uppercase ds-portfolio-box-title">{this.props.data.name}</h3>
                                    <p>Customer: {this.props.data.customer}</p>
                                    <p>Location: {this.props.data.location}</p>
                                    <p>Area: {this.props.data.area}</p>
                                    <p>Value: {this.props.data.value}</p>
                                    <p className="d-none d-md-block">{this.props.data.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-xl-block">
                            <div className="d-flex justify-content-between flex-xl-wrap">
                                {imgs}
                            </div>
                        </div>
                    </div>

                )
            }
        };
export default PortfolioLatest;