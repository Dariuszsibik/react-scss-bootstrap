import React, {Component} from 'react';

class PortfolioItem extends Component{


    render() {
        let classNameOverlay = this.props.isHover?
            'ds-portfolio-box-img ds-portfolio-img-overlay'
        :   'ds-portfolio-box-img';
        let classNameText = this.props.isHover?
            'text-center text-white ds-portfolio-box-text'
        :   'd-none';

        return (
            <div className="ds-portfolio-item"
                onMouseEnter={this.props.mouseEnter}
                onMouseLeave={this.props.mouseLeave}
            >
                <div className={classNameOverlay}>
                    <img className="img-fluid " src={this.props.img} alt="Realizacja-1" />
                </div>
                <div className={classNameText}>
                    <h4 className="text-uppercase ds-portfolio-box-header">{this.props.name}</h4>
                    <div className="w-50 mx-auto ds-hr"></div>
                    <span className="d-block ds-portfolio-item-info">
                        <span className="text-uppercase">Klient:</span> {this.props.customer}
                    </span>
                    <span className="d-block ds-portfolio-item-info">
                        <span className="text-uppercase">Lokalizacja:</span> {this.props.location}
                    </span>
                    <span className="d-block ds-portfolio-item-info">
                        <span className="text-uppercase">Powierzchnia:</span> {this.props.area}
                    </span>
                    <span className="d-block ds-portfolio-item-info">
                        <span className="text-uppercase">wartość:</span> {this.props.value}
                    </span>
                </div>
            </div>
)}};
export default PortfolioItem;