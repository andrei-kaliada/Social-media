import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



 const Header = (props) => {

    return(
        <header className="header">
                      <Link to="/" className="header-logo">
                         <h1>Logo</h1>
                      </Link>
            
                   <div className="header-btn">
                   { props.isAuth ? 
                      <div>
                        <p>{props.login}</p>
                        <Button onClick={props.logOut} variant="contained" color="primary">
                              LogOut
                          </Button>
                      </div>
                        
                    :
                        <NavLink to='/login'>
                        <Button variant="contained" color="primary">
                            LogIn
                        </Button>
                        </NavLink>
                    }
                   </div>
            </header>
    );
}

export default Header;

