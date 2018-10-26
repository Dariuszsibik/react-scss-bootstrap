import React from 'react';
import WidokSiatki from '../../images/ui/view-grid.png';
import WidokListy from '../../images/ui/view-list.png';
import Postlist from './Aktualnosci-list.js';

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
                    <Postlist/>
                    <div className="col-lg-4">
                        Widgety
                    </div>
                </div>
            </div>
        </div>

    );
    export default Aktualnosci;