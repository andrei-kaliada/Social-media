import { authThunk } from './auth-reduser';
const GET_AUTH = 'GET_AUTH';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}


export const getAuth = (id, login, email, isAuth) => {
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


export let initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export let initializApp = () => async (dispatch) => {

    let promise = await dispatch(authThunk());

    Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess());
    }
    )
}


export default appReducer;

