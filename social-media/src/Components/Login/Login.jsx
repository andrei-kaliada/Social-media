import React from 'react'
import LoginForm from './LoginForm';
import {logIn} from '../../redux/login-reducer';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Redirect } from 'react-router';



class Login extends React.Component{
    submit = (value) => {
        console.log(value);
        this.props.logIn(value);
        this.props.reset('login');
        
    }


    render(){
        console.log(this.props.isAuth)
        if(this.props.isAuth){
            return <Redirect to={'/profile'} />
        }
        
        return (
                <div>
                    <h1>Login</h1>
                    <LoginForm onSubmit={this.submit}/>
                </div>  
        )
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth
    }
}




export default connect(mapStateToProps,{logIn,reset})(Login);
