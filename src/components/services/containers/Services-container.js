import React, {Component} from 'react';
import Unit from '../presentational/Service'

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
        this.state.selectedServices===SelectedServices?
            this.setState({ selectedServices: 0 })
            : this.setState({ selectedServices: SelectedServices });
    }


    render() {
        return (
            this.props.dataService.map((el, i) =>
                <Unit
                    key={i}
                    name={el.name}
                    img={el.img}
                    description={el.description}
                    text={el.text}
                    isActive={this.isActive(el.id)}
                    setActiveService={this.setActiveService.bind(this, el.id)}
                />
            )
        );
    }
};

export default ServicesContainer;