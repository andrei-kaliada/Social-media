import React from 'react'
import LoginForm from './LoginForm';
import {logIn} from '../../redux/login-reducer';
import { connect } from 'react-redux';
import { reset } from 'redux-form';




class Login extends React.Component{
    submit = (value) => {
        console.log(value);
        this.props.logIn(value);
        this.props.reset('login');
        
    }


    render(){
        
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

    }
}

export default connect(mapStateToProps,{logIn,reset})(Login);
