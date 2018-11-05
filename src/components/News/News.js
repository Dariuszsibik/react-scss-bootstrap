import React, {Component} from 'react';
import NewsContainer from './containers/News-container';
import withHandleError from '../shared/hoc/withHandleError';
import withLoading from '../shared/hoc/withLoading';
import {compose} from 'recompose';

const API_URL = `${
    process.env.PUBLIC_URL
  }/api/news.json`;

const NewsContainerWithHandleErrorAndLoading = compose(
    withHandleError,
    withLoading,
    )(NewsContainer);

class News extends Component {
    constructor() {
        super();
        this.state = {
            dataNews: [],
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(res =>  res.json())
            .then(json => {
                this.setState({ dataNews: json.result, loading: false });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    render() {
        const { dataNews, loading, error } = this.state;

        return(
            <NewsContainerWithHandleErrorAndLoading
            dataNews={dataNews}
            loading={loading}
            error={error}
        />
        )
    }
};
    export default News;