import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div className="bg-ds-dark ds-header">
                    <div className="container">
                        <ul class="nav flex-column flex-md-row justify-content-lg-end text-uppercase">
                            <li class="nav-item ds-header-item-active">
                                <a class="nav-link ds-header-item-link" href="/">Strona Główna</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">Realizacje</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">Usługa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">Aktualności</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">Sklep</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">O nas
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