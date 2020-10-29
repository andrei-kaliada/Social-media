import { loginAPI } from '../api/api';
import { authThunk, logOutAuthThunk } from './auth-reduser';
import { stopSubmit } from 'redux-form';

export const logIn = (dataLogin) => async (dispatch) => {

    let response = await loginAPI.logIn(dataLogin)
    if (response.resultCode === 0) {
        dispatch(authThunk());
    } else {
        let messages = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: `${messages}` }));
    }
}


export const logOut = () => async (dispatch) => {

    let response = await loginAPI.logOut()
    if (response.resultCode === 0) {
        dispatch(logOutAuthThunk());
    }
}