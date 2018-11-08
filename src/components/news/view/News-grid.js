import React from 'react';
import WidokSiatki from '../../../images/ui/view-grid.png';
import WidokListy from '../../../images/ui/view-list.png';

const Grid = () => (
    <div className="row">
        <div className="col text-center">
            <div className="ds-view-switcher">
                <a href="/"><img src={WidokSiatki} alt="widok siatki" /></a>
                <a href="/"><img src={WidokListy} alt="widok listy" /></a>
            </div>
        </div>
    </div>
);
export default Grid;