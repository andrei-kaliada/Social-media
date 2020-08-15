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


export default authReducer;

