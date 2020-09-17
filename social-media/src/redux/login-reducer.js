import {loginAPI} from '../api/api';
import {authThunk,logOutAuthThunk} from './auth-reduser';
import { stopSubmit } from 'redux-form';

export const logIn = (dataLogin) => (dispatch) =>{

    loginAPI.logIn(dataLogin)
    .then(data => {
        if(data.resultCode === 0){
            dispatch(authThunk());  
        }else{
            let messages = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login",{_error:`${messages}`}));
        }
    })
}


export const logOut = () => (dispatch) =>{

    loginAPI.logOut()
    .then(data => {
        if(data.resultCode === 0){
            dispatch(logOutAuthThunk());
        }
        
    })
}