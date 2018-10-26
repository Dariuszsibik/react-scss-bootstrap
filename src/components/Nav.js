import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (

                <div className="bg-ds-dark ds-header">
                    <div className="container">
                        <ul className="nav flex-column flex-md-row justify-content-lg-end text-uppercase">
                            <li className="nav-item ds-header-item-active">
                                <NavLink to="/" activeStyle={{color: 'red'}} activeClassName="active" className="nav-link ds-header-item-link">Strona Główna</NavLink>
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
                                <NavLink to="/onas" className="nav-link ds-header-item-link">O nas<img src="" alt="" /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

        )
    }
}
export default Header;