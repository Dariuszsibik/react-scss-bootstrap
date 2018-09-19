import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div className="bg-primary ds-header">
                    <div className="container">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link text-white ds-header-item-link" href="/">Strona Główna</a>
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