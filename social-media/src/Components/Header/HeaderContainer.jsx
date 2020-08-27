import React from 'react';
import {connect} from 'react-redux';
import {getAuth,authThunk} from '../../redux/auth-reduser';
import Header from './Header';
import axios from 'axios';

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
       
    }
  

    componentDidMount(){
        this.props.authThunk();
    }


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


export default connect(mapStateToProps,{
    getAuth, authThunk
})(HeaderContainer);