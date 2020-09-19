import {autAPI} from '../api/api';
const GET_AUTH = 'GET_AUTH';
// const LOG_OUT_AUTH = 'LOG_OUT_AUTH';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching:false,
    isAuth:false
}


const authReducer = (state = initialState, action) => {
   
    switch(action.type){
        case GET_AUTH:
          
            return{
                ...state,   
                ...action.payload,
            }
        default: return state;
    }
}


export const getAuth = (id,login,email,isAuth) => {
    return {
        type:GET_AUTH,
        payload:{
            id,
            email,
            login,
            isAuth
        }
    }
}



export const authThunk = () => async (dispatch) => {
  
   let response = await autAPI.auth()
   if(response.resultCode === 0){
            
    let {id ,email, login } = response.data;
     dispatch(getAuth(id, login,email, true));
 }

  return response;
}


export const logOutAuthThunk = () => async (dispatch) => {
  
    let response = await autAPI.auth()
    if(response.resultCode === 1){
           
        dispatch(getAuth(null,null,null,false));
    }
}


export default authReducer;

