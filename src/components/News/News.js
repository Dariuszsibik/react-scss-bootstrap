import React from 'react';
import WidokSiatki from '../../images/ui/view-grid.png';
import WidokListy from '../../images/ui/view-list.png';
import Lists from './News-list.js';
import Search from './News-search.js';
import Archiwum from './News-archive';
import Popular from './News-popular.js';
import category from './News-category.js';
import Pagination from './News-pagination.js';

const News = () => (

        <div className="ds-post-list-page">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="ds-view-switcher">
                            <a href="/"><img src={WidokSiatki} alt="widok siatki"/></a>
                            <a href="/"><img src={WidokListy} alt="widok listy"/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Lists/>
                        <Pagination/>
                    </div>
                    <div className="col-lg-4">
                        <Search/>
                        <Archiwum/>
                        <Popular/>
                        <category/>
                    </div>
                </div>
            </div>
        </div>

    );
    export default News;