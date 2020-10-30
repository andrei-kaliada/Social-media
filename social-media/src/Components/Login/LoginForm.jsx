import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import {required, maxLength, emailSumbol} from '../../utils/validators/validators';
import "./LoginForm.scss";

const maxLengthCreator = maxLength(50);

function LoginForm(props) {
    const { handleSubmit } = props;
   
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <Field  placeholder={'Email'} name={"email"} component={Input} 
                    validate={[required, maxLengthCreator, emailSumbol]}/>
                </div>
                <div>
                    <Field type="password" placeholder={'Password'} name={"password"} component={Input}
                     validate={[required, maxLengthCreator]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name="rememberMe" component={Input}/> Remember me
                </div>
                {props.error && 
                <div className="form-summary-error">
                    <p>{props.error}</p>
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
                {props.captcha && 
                
                <div>
                    <img src={props.captcha} alt="captcha"/>
                    <p>Incorrect anti-bot symbols.</p>
                    <p>Input number in this picture.</p>
                    <Field placeholder={'Captca'} name={"captcha"} component={Input} />
                </div>
                
                }
            </form>
    )
}

export default reduxForm({
    form:'login',
})(LoginForm);

