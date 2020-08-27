import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

 const Header = (props) => {
    const classes = useStyles();

    return(
        <header className="header">
                <div className="headerWrapper">
                    <div className="headerWrapper__logo">
                      <Link to="/">
                         <h1>Logo</h1>
                      </Link>
                    </div>
                    { props.isAuth ? 
                        <p>{props.login}</p>
                    :
                        <NavLink to='/login'>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                        </NavLink>
                    }
                </div>
            </header>
    );
}

export default Header;

