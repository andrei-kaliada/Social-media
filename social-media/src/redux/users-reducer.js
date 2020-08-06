const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SELECT_PAGE_NUMBER = 'SELECT_PAGE_NUMBER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
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
                users:[...action.users]
            }
        case SELECT_PAGE_NUMBER:
            return{
                ...state,
                currentPage:action.currentPage
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalUsersCount:action.totalCount
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

export const selectPageNumber = (currentPage) => {
    return {
        type: SELECT_PAGE_NUMBER,
        currentPage
    }
}

export const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export default userReducer;