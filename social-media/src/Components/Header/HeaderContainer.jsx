import React from 'react';
import {connect} from 'react-redux';
import {getAuth,authThunk} from '../../redux/auth-reduser';
import {logOut} from '../../redux/login-reducer';
import Header from './Header';
import {compose} from 'redux';

class HeaderContainer extends React.Component{
 


    render(){
       
        return(
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    
    return{
        id:state.auth.id,
        email:state.auth.email,
        login:state.auth.login,
        isAuth:state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps,{getAuth, authThunk, logOut}),
)
(HeaderContainer);