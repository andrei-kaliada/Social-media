import {autAPI} from '../api/api';
const GET_AUTH = 'GET_AUTH';
const SET_CAPTCHA = 'SET_CAPTCHA';
// const LOG_OUT_AUTH = 'LOG_OUT_AUTH';


export type InitialStateType = typeof initialState;

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching:false,
    isAuth:false,
    captcha:null as object | null
}


const authReducer = (state = initialState, action:any):InitialStateType => {
   
    switch(action.type){
        case GET_AUTH:
          
            return{
                ...state,   
                ...action.payload,
            }
        case SET_CAPTCHA:
            return{
                ...state,
                captcha:action.captcha
            }
        default: return state;
    }
}


type GetAuthPayloadType = {
    id:number | null,
    email:string | null,
    login:string | null,
    isAuth:boolean
}

type GetAuthType = {
    type: typeof GET_AUTH,
    payload: GetAuthPayloadType
}


export const getAuth = (id:number | null, login:string | null, email:string | null, isAuth:boolean): GetAuthType => {
    return {
        type: GET_AUTH,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}

type SetCaptchaType = {
    type: typeof SET_CAPTCHA,
    captcha:object
}

export const setCaptcha = (captcha:object): SetCaptchaType =>{
    return {
        type:SET_CAPTCHA,
        captcha
    }
}



export const authThunk = () => async (dispatch: any) => {
  
   let response = await autAPI.auth()
   if(response.resultCode === 0){
            
    let {id ,email, login } = response.data;
     dispatch(getAuth(id, login,email, true));
 }

  return response;
}


export const logOutAuthThunk = () => async (dispatch:any) => {
  
    let response = await autAPI.auth()
    if(response.resultCode === 1){
           
        dispatch(getAuth(null,null,null,false));
    }
}


export default authReducer;

