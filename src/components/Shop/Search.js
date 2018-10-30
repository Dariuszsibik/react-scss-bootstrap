import React from 'react';
import SearchIcon from '../../images/ui/icon-top-search.png';

const Search = () => (

        <div className="ds-product-search ds-alternate-bg">
            <div className="container">
                <div className="input-group ds-product-search-inner ">
                    <input className="form-control text-uppercase border-primary ds-product-search-input" type="search" placeholder="Wpisz szukaną frazę" />
                    <div className="input-group-btn ds-product-search-control">
                        <button className="btn btn-primary bg-white border-primary text-uppercase dropdown-toggle ds-product-search-categories">Kategorie</button>
                    </div>
                    <span className="input-group-btn ds-product-search-control">
                        <button className="btn btn-primary ds-product-search-btn">
                            <img className="" src={SearchIcon} alt="szukaj"/>
                        </button>
                    </span>
                </div>
            </div>
        </div>

    );
    export default Search;