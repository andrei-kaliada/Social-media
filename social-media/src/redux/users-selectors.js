const getUsersSelect = (state) => {
    return state.usersPage.users;
}

const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

const getIsDisabledBtn = (state) => {
    return state.usersPage.isDisabledBtn;
}


export {getUsersSelect, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching ,getIsDisabledBtn};