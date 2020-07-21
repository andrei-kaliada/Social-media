import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import classNames from 'classnames/bind';

import './Nav.scss';

const Nav = () => {
    return(
        <nav className="nav">
            <ul>
                <NavLink to="/profile"
                 className={classNames('nav__link')}
                 activeClassName="nav__link-active"
                 >
                    <li>Profile</li>
                </NavLink>
                <NavLink to="/dialogs"  
                className={classNames('nav__link')}
                activeClassName="nav__link-active"
                >
                    <li>Message</li>
                </NavLink>
                {/* <Link to="/">
                    <li>News</li>
                </Link>
                <Link to="/">
                    <li>Music</li>
                </Link>
                <Link to="/">
                    <li>Setting</li>
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;