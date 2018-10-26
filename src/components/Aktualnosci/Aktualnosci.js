import React from 'react';
import WidokSiatki from '../../images/ui/view-grid.png';
import WidokListy from '../../images/ui/view-list.png';
import Lists from './Aktualnosci-list.js';
import Widgets from './Aktualnosci-widget.js';
import Archiwum from './Aktualnosci-archiwum.js';

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
                    </div>
                    <div className="col-lg-4">
                        <Widgets/>
                        <Archiwum/>
                    </div>
                </div>
            </div>
        </div>

    );
    export default Aktualnosci;