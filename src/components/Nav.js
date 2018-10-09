import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div className="bg-ds-dark ds-header">
                    <div className="container">
                        <ul className="nav flex-column flex-md-row justify-content-lg-end text-uppercase">
                            <li className="nav-item ds-header-item-active">
                                <a className="nav-link ds-header-item-link" href="/test">Strona Głównaa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white ds-header-item-link" href="/">Realizacje</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white ds-header-item-link" href="/">Usługa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white ds-header-item-link" href="/">Aktualności</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white ds-header-item-link" href="/">Sklep</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white ds-header-item-link" href="/">O nas
                                    <img src="" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Header;