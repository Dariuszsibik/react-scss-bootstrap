import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <div className="bg-ds-dark ds-header">
                    <div className="container">
                        <ul className="nav flex-column flex-md-row justify-content-lg-end text-uppercase">
                            <li className="nav-item ds-header-item-active">
                                <Link activeClassName="active" className="nav-link ds-header-item-link" to="/">Strona Główna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ds-header-item-link" to="/realizacje">Realizacje</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ds-header-item-link" to="/usluga">Usługa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ds-header-item-link" to="/aktualnosci">Aktualności</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ds-header-item-link" to="/sklep">Sklep</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link ds-header-item-link" to="/onas">O nas<img src="" alt="" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Header;