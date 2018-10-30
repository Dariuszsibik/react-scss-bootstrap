import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import IconTopCart from '../images/ui/icon-top-cart.png';
import IconTopSearch from '../images/ui/icon-top-search.png';


class Header extends Component {
    render() {
        return (

                <div className="bg-ds-dark ds-header">
                    <div className="container">
                        <ul className="nav flex-column flex-md-row justify-content-lg-end text-uppercase">
                            <li className="nav-item">
                                <NavLink to="/start" activeClassName="active" className="nav-link ds-header-item-link">Strona Główna</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/realizacje" className="nav-link ds-header-item-link">Realizacje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/usluga" className="nav-link ds-header-item-link">Usługa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aktualnosci" className="nav-link ds-header-item-link">Aktualności</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/sklep" className="nav-link ds-header-item-link">Sklep</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/onas" className="nav-link ds-header-item-link">O nas</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/szukaj" className="nav-link ds-header-item-link">
                                    <img src={IconTopSearch} alt="szukaj"/>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/koszyk" className="nav-link ds-header-item-link">
                                    <img src={IconTopCart} alt="koszyk"/>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

        )
    }
}
export default Header;