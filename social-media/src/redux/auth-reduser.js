import {usersAPI} from '../api/api';
const GET_AUTH = 'GET_AUTH';


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
                ...action.data,
                isAuth:true
            }
        default: return state;
    }
}


export const getAuth = ({id,login,email}) => {
    
    return {
        type:GET_AUTH,
        data:{
            id,
            email,
            login,
        }
    }
}

export const authThunk = () => (dispatch) => {
    usersAPI.auth()
    .then( data => {
        if(data.resultCode === 0){
            dispatch(getAuth(data.data));
        }
    });
}


export default authReducer;

