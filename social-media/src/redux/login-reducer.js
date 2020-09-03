import React from 'react';
import {loginAPI} from '../api/api';
import {authThunk} from './auth-reduser';
import { Redirect } from 'react-router';

export const logIn = (dataLogin) => (dispatch) =>{

    loginAPI.logIn(dataLogin)
    .then(data => {
        console.log(data);

        if(data.resultCode === 0){
            console.log("working");
            return(
                <Redirect to="/profile" />
            );

            
        }
    })
}


export const logOut = () => (dispatch) =>{

    loginAPI.logOut()
    .then(data => {
       
        console.log(data);
        debugger
        if(data.resultCode === 0){
            console.log("working");
            return(
                <Redirect to="/profile" />
            );

            
        }
        console.log("working");
    })
}