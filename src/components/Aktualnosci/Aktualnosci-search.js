import React from 'react';
import IconSearch from '../../images/ui/icon-top-search.png';

const Search = () => (

                    <div className="ds-post-widget">
                        <div className="input-group ds-post-widget-search">
                            <input className="form-control ds-post-widget-search-input" type="search" placeholder="SZUKAJ"/>
                            <span className="input-group-addon">
                                <img src={IconSearch} alt="szukaj wpisu"/>
                            </span>
                        </div>
                    </div>

    );
    export default Search;