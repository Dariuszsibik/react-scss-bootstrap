import React, {Component} from 'react';
import Service from './Service';
import FetchError from '../shared/FetchError';
import LoadingSpinner from '../shared/LoadingSpinner';
import axios from 'axios';

const API_URL = `${
    process.env.PUBLIC_URL
  }/api/services.json`;

class Services extends Component {
    constructor() {
        super();
        this.state = {
          selectedServices: 0,
          dataService: [],
          loading: true,
          error: false,
        };
    }

    componentDidMount() {
        axios
            .get(API_URL)
            .then(({ data: { results } }) => {
                setTimeout(() => {
                    this.setState({ dataService: results, loading: false });
                });
            })
            .catch(error => {
                this.setState({ error });
             });
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

        if (this.state.error) {
            return <FetchError />;
        } else if (this.state.loading) {
            return <LoadingSpinner />;
        }

        let RenderServices = this.state.dataService.map((el, i) => <Service
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