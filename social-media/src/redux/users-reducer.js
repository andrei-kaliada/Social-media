import {usersAPI} from '../api/api';
import orderBy from 'lodash/orderBy';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SELECT_PAGE_NUMBER = 'SELECT_PAGE_NUMBER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';
const TOGGLE_DISABLED_FOLLOW_BUTTON = 'TOGGLE_DISABLED_FOLLOW_BUTTON';
const SORT_USERS = 'SORT_USERS';


let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    isDisabledBtn:[],
    sortBy:false
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:return{
            ...state,
            users:state.users.map( element => element.id === action.userId ?
                 {...element, followed:!element.followed}: element),
            
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
                users: state.users.map((element) =>action.userId === element.id ?
                { 
                    ...element,
                    followed: false,
                } : element)
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
        case CHANGE_FETCHING_STATUS:
            return{
                ...state,
                isFetching:action.status
            }
        case TOGGLE_DISABLED_FOLLOW_BUTTON:
            return{
                ...state,
                isDisabledBtn: action.isFetching 
                ? [...state.isDisabledBtn, action.id]
                 :state.isDisabledBtn.filter( el => el !== action.id)
                ,  
            }
        case SORT_USERS:
            return {
                ...state,
                users:[...orderBy(state.users,['name'],[state.sortBy ? 'asc' : 'desc'])],
                sortBy:!state.sortBy
            }
        default: return state;
    }

}

export const toggleFollow = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}


export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setPageNumber = (currentPage) => {
    return {
        type: SELECT_PAGE_NUMBER,
        currentPage
    }
}

export const getTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const setFetchingStatus = (status) => {
    return{
        type:CHANGE_FETCHING_STATUS,
        status
    }
}

export const toggleDisabledButton = (id,isFetching) => {

    return{
        type:TOGGLE_DISABLED_FOLLOW_BUTTON,
        id,
        isFetching
    }
}

export const sortUsers = () => {
    return{
        type:SORT_USERS
    }
}


export const getUsers = (currentPage,pageSize) => (dispatch) => {
    dispatch(setFetchingStatus(false));
    dispatch(setPageNumber(currentPage));
    usersAPI.getUsers(currentPage,pageSize)
    .then(data => {
    dispatch(setUsers(data.items));
    dispatch(getTotalCount(data.totalCount));
    dispatch(setFetchingStatus(true));
});
}

export const followThunk = (id) => (dispatch) => {
    dispatch(toggleDisabledButton(id,true));
    usersAPI.follow(id)
    .then(data => {
        if(data.resultCode === 0){
            dispatch(follow(id));
           
        }
        dispatch(toggleDisabledButton(id,false));
        
    });
}

export const unFollowThunk = (id) => (dispatch) => {
    dispatch(toggleDisabledButton(id,true));
    usersAPI.unFollow(id)
    .then(data => {
        if(data.resultCode === 0){
            dispatch(unfollow(id));
           
        }
        dispatch(toggleDisabledButton(id,false));
        
    });
}


export default userReducer;