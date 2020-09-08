import React from 'react';
import {loginAPI, autAPI} from '../api/api';
import {authThunk,logOutAuthThunk} from './auth-reduser';
import { Redirect } from 'react-router';
import history from '../history/history';

export const logIn = (dataLogin) => (dispatch) =>{

    loginAPI.logIn(dataLogin)
    .then(data => {
        console.log(data);
        if(data.resultCode === 0){
            dispatch(authThunk());  
        }else{
            alert(data.messages);
        }
    })
}


export const logOut = () => (dispatch) =>{

    loginAPI.logOut()
    .then(data => {
        console.log(data.resultCode)
        if(data.resultCode === 0){
            dispatch(logOutAuthThunk());
        }
        
    })
}