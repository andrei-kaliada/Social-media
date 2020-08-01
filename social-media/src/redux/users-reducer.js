const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
    users: [
       
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:return{
            ...state,
            users:state.users.map( element => element.id === action.userId ?
                 {...element, followed:!element.followed}: element)
        }
        case FOLLOW:{
            let stateCopy = {
                ...state,
                users: state.users.map(element => {
                    if(element.id === action.userId){
                       return {
                           ...element,
                           followed:true,
                       }
                    }

                    return element;
                })  
            }
                
                // users:[...state.users] the same
                return stateCopy;
                
            }
        case UNFOLLOW:
            return {
                ...state,
                // users:[...state.users] the same
                users: state.users.map((element) =>action.userId === element.id ?{ ...element,followed: false} : element)
            }
        case SET_USERS:
            return{
                ...state,
                users:[...state.users, ...action.users]
            }
        default: return state;
    }

}

export const toggleFollowAC = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}


export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default userReducer;