import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required, maxLength, emailSumbol} from '../../utils/validators/validators';

const maxLengthCreator = maxLength(10);

function LoginForm(props) {
    const { handleSubmit } = props;
    
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name="login" component={Input} 
                    validate={[required, maxLengthCreator, emailSumbol]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name="password" component={Input}
                     validate={[required, maxLengthCreator]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name="rememberMe" component={Input}/> remember me
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

