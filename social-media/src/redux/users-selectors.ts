import { createSelector } from 'reselect';
import { AppStateType } from './redux-store';

const getUsers = (state:AppStateType) =>{
    return state.usersPage.users;
}

const getUsersSelect = createSelector(
    getUsers,
    users => users.filter( user => true)
);
    

const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize;
}

const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount;
}

const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage;
}

const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching;
}

const getIsDisabledBtn = (state:AppStateType) => {
    return state.usersPage.isDisabledBtn;
}


export {getUsersSelect, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching ,getIsDisabledBtn};