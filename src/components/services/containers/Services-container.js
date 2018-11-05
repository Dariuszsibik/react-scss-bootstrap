import React, {Component} from 'react';
import Unit from '../view/Service'

class ServicesContainer extends Component {
    constructor() {
        super();
        this.state = {
          selectedServices: 0,
        };
    }

    isActive(id) {
        return this.state.selectedServices === id;
    }

    setActiveService(SelectedServices) {
        this.state.selectedServices === SelectedServices ?
            this.setState({
                selectedServices: 0
            }) :
            this.setState({
                selectedServices: SelectedServices
            });
    }

    render() {
        return (
            <section className="ds-front-page-services">
                <div className="container">
                    <div className="ds-section-header">
                        <h2 className="text-uppercase">Nasze Usługi</h2>
                        <p>Kliknij aby zobaczyć szczegóły</p>
                    </div>
                    <div className="row">
                        {this.props.dataService.map((el, i) =>
                            <Unit
                                key={i}
                                name={el.name}
                                img={el.img}
                                description={el.description}
                                text={el.text}
                                isActive={this.isActive(el.id)}
                                setActiveService={this.setActiveService.bind(this, el.id)}
                            />
                        )}
                    </div>
                </div>
            </section>
        );
    }
};

export default ServicesContainer;