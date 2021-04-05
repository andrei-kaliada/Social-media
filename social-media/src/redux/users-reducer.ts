import {usersAPI} from '../api/api';
import orderBy from 'lodash/orderBy';
import {updateObjectArray} from '../utils/object-helpers';
import {UsersType} from '../../types/types';
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
    users: [] as Array<UsersType>,
    pageSize:5 as number,
    totalUsersCount:0 as number,
    currentPage:1 as number ,
    isFetching:false as boolean,
    isDisabledBtn:[] as Array<number>, //array of users id
    sortBy:false as boolean
};

export type InitialStatetype = typeof initialState;



const userReducer = (state = initialState, action:any):InitialStatetype => {

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

// let followUnfollow = (state, action , followedValue) => {
//     return state.users.map((element) => action.userId === element.id ?
//                  { 
//                      ...element,
//                      followed: followedValue,
//                  } : element)
//  }

type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW,
    userId:number
}

export const toggleFollow = (userId:number):ToggleFollowType => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}

type FollowType = {
    type: typeof FOLLOW,
    userId: number
}


export const follow = (userId:number):FollowType => {
    return {
        type: FOLLOW,
        userId
    }
}

type UnfollowType = {
    type: typeof UNFOLLOW,
    userId: number
}

export const unfollow = (userId:number):UnfollowType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

type SetUsersFollowType = {
    type: typeof SET_USERS,
    users:Array<UsersType>
}

export const setUsers = (users:Array<UsersType>):SetUsersFollowType => {
    return {
        type: SET_USERS,
        users
    }
}

type SetPageNumberType = {
    type: typeof SELECT_PAGE_NUMBER,
    currentPage:number
}

export const setPageNumber = (currentPage:number):SetPageNumberType => {
    return {
        type: SELECT_PAGE_NUMBER,
        currentPage
    }
}

type GetTotalCountType = {
    type:typeof SET_TOTAL_COUNT,
    totalCount:number
}

export const getTotalCount = (totalCount:number):GetTotalCountType => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

type SetFetchingStatusType = {
    type: typeof CHANGE_FETCHING_STATUS,
    status:boolean
}

export const setFetchingStatus = (status:boolean):SetFetchingStatusType => {
    return{
        type:CHANGE_FETCHING_STATUS,
        status
    }
}

type ToggleDisabledButtonType = {
    type: typeof TOGGLE_DISABLED_FOLLOW_BUTTON,
    id:number,
    isFetching: boolean
}

export const toggleDisabledButton = (id:number,isFetching:boolean):ToggleDisabledButtonType => {

    return{
        type:TOGGLE_DISABLED_FOLLOW_BUTTON,
        id,
        isFetching
    }
}

type SortUsersType = {
    type: typeof SORT_USERS
}

export const sortUsers = ():SortUsersType => {
    return{
        type:SORT_USERS
    }
}


export const getUsers =  (currentPage:number,pageSize:number) => async (dispatch:any) => {
    dispatch(setFetchingStatus(false));
    dispatch(setPageNumber(currentPage));
   let dataUsers = await usersAPI.getUsers(currentPage,pageSize);
    dispatch(setUsers(dataUsers.items));
    dispatch(getTotalCount(dataUsers.totalCount));
    dispatch(setFetchingStatus(true));

}

const followUnfollowFlow = async (dispatch:any, id:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleDisabledButton(id,true));
    let dataFollow = await apiMethod(id);
    if(dataFollow.resultCode === 0){
     dispatch(actionCreator(id));
    
     }
 dispatch(toggleDisabledButton(id,false));
}

export const followThunk = (id:number) =>  (dispatch:any) => {
    
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow);
}

export const unFollowThunk = (id:number) =>  (dispatch:any) => {
    followUnfollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unfollow);
}


export default userReducer;