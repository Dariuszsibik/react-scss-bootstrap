import React from 'react';
import Search from './../Aktualnosci-search.js';
import Archiwum from './../Aktualnosci-archiwum.js';
import Popular from './../Aktualnosci-popularne.js';
import Kategorie from './../Aktualnosci-kategorie.js';
import Komentarze from './Wpis-komentarze.js';
import Formularz from './Wpis-formularz';
import Wpis1 from './Wpis1';

const Wpis = () => (

        <div className="ds-post-page">
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Wpis1/>
                        <div className="ds-hr"></div>
                        <Komentarze/>
                        <div className="ds-hr"></div>
                        <Formularz/>
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
    export default Wpis;