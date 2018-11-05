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
        console.log(this.props.dataNews)
        return(

        <div className="ds-post-list-page">
            <div className="container">
                        <ViewGrid/>
                <div className="row">
                    <div className="col-lg-8">
                        <Lists/>
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