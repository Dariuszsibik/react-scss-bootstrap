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
            <ServicesWithHandleErrorAndLoading
                dataService={dataService}
                loading={loading}
                error={error}
            />
            );
    }
}

export default Services;