import React from 'react';
import WidokSiatki from '../../images/ui/view-grid.png';
import WidokListy from '../../images/ui/view-list.png';
import Lists from './Aktualnosci-list.js';
import Search from './Aktualnosci-search.js';
import Archiwum from './Aktualnosci-archiwum.js';
import Popular from './Aktualnosci-popularne.js';
import Kategorie from './Aktualnosci-kategorie.js';
import Pagination from './Aktualnosci-paginacja.js';

const Aktualnosci = () => (

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
                        <Kategorie/>
                    </div>
                </div>
            </div>
        </div>

    );
    export default Aktualnosci;