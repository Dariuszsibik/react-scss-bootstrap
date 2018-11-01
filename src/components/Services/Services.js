import React, {Component} from 'react';
import Service from './Service';

class Services extends Component {
    constructor() {
        super();
        this.state = {
          selectedServices: 0,
        };
    }
      
    isActive(id) {
        return this.state.selectedServices === id;
    }
      
    setActiveTab(SelectedServices) {
        this.state.selectedServices===SelectedServices?
            this.setState({ selectedServices: 0 })
            : this.setState({ selectedServices: SelectedServices });
    }

    render() {
        var total = data.services.total;

        let RenderServices = total.map((el, i) => <Service 
                                                key={i}
                                                name={el.name} 
                                                img={el.img}
                                                description={el.description}
                                                text={el.text}
                                                isActive={this.isActive(el.id)}
                                                onActiveTab={this.setActiveTab.bind(this, el.id)}
                                            />
                                    )

        return (

            <section className="ds-front-page-services">
            <div className="container">
                <div className="ds-section-header">
                    <h2 className="text-uppercase">Nasze Usługi</h2>
                    <p>Kliknij aby zobaczyć szczegóły, </p>
                </div>
                <div className="row">
                    {RenderServices}
                </div>
            </div>
            </section>

            );
    }
}

export default Services;

const data = {
    services: {
      total: [
        { 
            id: 1,
            name: "Projektowanie wnętrz",
            img: "./images/services/service-2.jpg" ,
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
        { 
            id: 2,
            name: "Projektowanie Płotów",
            img: "./images/services/service-3.jpg",
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",       
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
        {
            id: 3, 
            name: "Projektowanie Domów",
            img: "./images/services/service-4.jpg",
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",       
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
        { 
            id: 4, 
            name: "Projektowanie mieszkań",
            img: "./images/services/service-1.jpg",
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
        {
            id: 5,
            name: "Projektowanie wnętrz",             
            img: "./images/services/service-3.jpg",
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
        {
            id: 6,
            name: "Projektowanie wnętrz",
            img: "./images/services/service-2.jpg",
            description: "Do quis deserunt non nisi ad proident proident cillum Lorem adipisicing.",       
            text: "Lorem Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsuLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsu Lorem ipsum dolor sit amet, Lorem ipsu"
        },
      ]
    }
  }