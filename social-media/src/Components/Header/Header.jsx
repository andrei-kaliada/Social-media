import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

 const Header = () => {
    return(
        <header className="header">
                <div className="headerWrapper">
                    <div className="headerWrapper__logo">
                      <Link to="/">
                         <h1>Logo</h1>
                      </Link>
                    </div>
                </div>
            </header>
    );
}

export default Header;

