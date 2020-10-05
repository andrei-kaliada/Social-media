import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
// import classNames from 'classnames/bind';

import './Nav.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/profile"
                        className={'nav__link'}
                        activeClassName="nav__link-active"
                    >
                        Profile
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs"
                        className={'nav__link'}
                        activeClassName="nav__link-active"
                    >
                        Message
                </NavLink>
                </li>
                <li>
                    <NavLink to="/users"
                        className={'nav__link'}
                        activeClassName="nav__link-active"
                    >
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        News
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Groups
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;