import React from 'react';
import Search from './../view/News-search.js';
import Archive from './../view/News-archive.js';
import Popular from './../view/News-popular';
import Kategorie from './../view/News-category';
import Komentarze from './Entry-comment';
import Formularz from './Entry-form';
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
                        <Archive/>
                        <Popular/>
                        <Kategorie/>
                    </div>
                </div>
            </div>
        </div>

    );
    export default Wpis;