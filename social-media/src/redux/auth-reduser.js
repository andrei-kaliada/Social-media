import {autAPI} from '../api/api';
const GET_AUTH = 'GET_AUTH';
const LOG_OUT_AUTH = 'LOG_OUT_AUTH';


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
   console.log(id,login,email,isAuth);
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



export const authThunk = () => (dispatch) => {
  
    autAPI.auth()
    .then( data => {
        console.log(data.data);
        if(data.resultCode === 0){
            
           let {id ,email, login } = data.data;
            dispatch(getAuth(id, login,email, true));
        }
    });
}

export const logOutAuthThunk = () => (dispatch) => {
  
    autAPI.auth()
    .then( data => {
        console.log(data)
        if(data.resultCode === 1){
           
            dispatch(getAuth(null,null,null,false));
        }
    });
}


export default authReducer;

