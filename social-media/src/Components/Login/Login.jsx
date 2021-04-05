import React from 'react'
import LoginForm from './LoginForm';
import {logIn} from '../../redux/login-reducer.ts';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Redirect } from 'react-router';



class Login extends React.Component{
    submit = (value) => {

        this.props.logIn(value);
        this.props.reset('login');
        
    }


    render(){

        if(this.props.isAuth){
            return <Redirect to={'/profile'} />
        }
        
        return (
                <div>
                    <h1>Login</h1>
                    <LoginForm captcha={this.props.captcha} onSubmit={this.submit}/>
                </div>  
        )
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        captcha:state.auth.captcha
    }
}




export default connect(mapStateToProps,{logIn,reset})(Login);
