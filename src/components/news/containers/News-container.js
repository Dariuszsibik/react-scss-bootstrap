import React, {Component} from 'react';
import Lists from '../view/News-list.js';
import Search from '../view/News-search.js';
import Archiwum from '../view/News-archive';
import Popular from '../view/News-popular.js';
import Category from '../view/News-category.js';
import ViewGrid from '../view/News-grid.js';
import Pagination from '../../Pagination.js';

class NewsContainer extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render(){
        let newsList = this.props.dataNews
            .map((el, i) =>
                <Lists
                    key={el.id}
                    date={el.date}
                    title={el.title}
                    description={el.description}
                    img={el.imgLarge}
                />)

        return(

        <div className="ds-post-list-page">
            <div className="container">
                        <ViewGrid/>
                <div className="row">
                    <div className="col-lg-8">
                        {newsList}
                        <Pagination/>
                    </div>
                    <div className="col-lg-4">
                        <Search/>
                        <Archiwum/>
                        <Popular/>
                        <Category/>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
    export default NewsContainer;