import React, {Component} from 'react';


class Pagination extends Component {

    render() {

        let href = window.location.href;

          return (

            <div className="text-center ds-pagination">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a href="/" className="page-link">&lt; poprzednia strona</a></li>
                    <li className="page-item"><a href={href} className="page-link">następna strona &gt;</a></li>
                </ul>
            </div>

         )
    }
};
export default Pagination;