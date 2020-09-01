import React from 'react';
import { Field, reduxForm } from 'redux-form'

function LoginForm(props) {
    const { handleSubmit } = props;
    
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name="login" component="input"/>
                </div>
                <div>
                    <Field placeholder={'Password'} name="password" component="input"/>
                </div>
                <div>
                    <Field type={'checkbox'} name="rememberMe" component="input"/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export default reduxForm({
    form:'login',
})(LoginForm);

