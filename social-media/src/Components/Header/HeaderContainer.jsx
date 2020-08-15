import React from 'react';
import {connect} from 'react-redux';
import {getAuth} from '../../redux/auth-reduser';
import Header from './Header';
import axios from 'axios';

class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
       
    }
  

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
        .then( response => {
            console.log(response.data.data);
            if(response.data.resultCode === 0){
                this.props.getAuth(response.data.data);
            }
        });
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
    getAuth
})(HeaderContainer);