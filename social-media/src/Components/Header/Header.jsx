import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import LogoSvg from '../../assets/images/logo.svg';
import Nav from '../Navigation/Nav';



 const Header = (props) => {

    return(
        <header className="header">
                      <Link to="/" className="header-logo">
                         <img src={LogoSvg} alt="logo"/>
                         <p>Just join it</p>
                      </Link>
                    <div className="header-nav">
                       
                    </div>
            
                   <div className="header-btn">
                   { props.isAuth ? 
                      <div class="header-btn__logout">
                        <p>{props.login}</p>
                        <div>
                        <Button onClick={props.logOut} variant="contained" color="primary">
                              LogOut
                          </Button>
                        </div>
                      </div>
                        
                    :
                    <div class="header-btn__login">
                        <div class="btnLogin">
                            <NavLink to='/login' >
                            <Button variant="contained" color="primary">
                                LogIn
                            </Button>
                            </NavLink>
                        </div>
                    </div>
                    }
                   </div>
            </header>
    );
}

export default Header;

