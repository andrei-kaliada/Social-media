import {usersAPI} from '../api/api';
import orderBy from 'lodash/orderBy';
import {updateObjectArray} from '../utils/object-helpers';
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

let followUnfollow = (state, action , followedValue) => {
   return state.users.map((element) => action.userId === element.id ?
                { 
                    ...element,
                    followed: followedValue,
                } : element)
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return{
            ...state,
            users:state.users.map( element => element.id === action.userId ?
                 {...element, followed:!element.followed}: element),
            
        }
        case FOLLOW:
            
            return{
                ...state,
                users:updateObjectArray(state.users, action.userId,"id",{followed:true})
                // users: followUnfollow(state,action,true)
                
            }
        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectArray(state.users, action.userId,"id",{followed:false})
                // users: followUnfollow(state,action,false)
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


export const getUsers =  (currentPage,pageSize) => async (dispatch) => {
    dispatch(setFetchingStatus(false));
    dispatch(setPageNumber(currentPage));
   let dataUsers = await usersAPI.getUsers(currentPage,pageSize);
    dispatch(setUsers(dataUsers.items));
    dispatch(getTotalCount(dataUsers.totalCount));
    dispatch(setFetchingStatus(true));

}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleDisabledButton(id,true));
    let dataFollow = await apiMethod(id);
    if(dataFollow.resultCode === 0){
     dispatch(actionCreator(id));
    
     }
 dispatch(toggleDisabledButton(id,false));
}

export const followThunk = (id) =>  (dispatch) => {
    
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow);
}

export const unFollowThunk = (id) =>  (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unfollow);
}


export default userReducer;