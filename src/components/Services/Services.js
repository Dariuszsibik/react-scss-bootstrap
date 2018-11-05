import React, {Component} from 'react';
import ServicesContainer from './containers/Services-container.js'
import withHandleError from '../shared/hoc/withHandleError';
import withLoading from '../shared/hoc/withLoading';
import {compose} from 'recompose';

const API_URL = `${
    process.env.PUBLIC_URL
  }/api/services.json`;

const ServicesWithHandleErrorAndLoading = compose(
    withHandleError,
    withLoading,
    )(ServicesContainer);

class Services extends Component {
    constructor() {
        super();
        this.state = {
          dataService: [],
          loading: true,
          error: false,
        };

    }

    componentDidMount() {
        fetch(API_URL)
            .then(res =>  res.json())
            .then(json => {
                this.setState({ dataService: json.results, loading: false });
            })
            .catch(error => {
                this.setState({ error });
            });
    }


    render() {
        const { dataService, loading, error } = this.state;
        
        return (

            <section className="ds-front-page-services">
                <div className="container">
                    <div className="ds-section-header">
                        <h2 className="text-uppercase">Nasze Usługi</h2>
                        <p>Kliknij aby zobaczyć szczegóły, </p>
                    </div>
                    <div className="row">
                        <ServicesWithHandleErrorAndLoading
                            dataService={dataService}
                            loading={loading}
                            error={error}
                        />
                    </div>
                </div>
            </section>

            );
    }
}

export default Services;