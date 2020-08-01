import React, { Component } from 'react';
import Users from './Users';
import {setUsersAC,followAC, unfollowAC, toggleFollowAC} from '../../redux/users-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowAC(userId))
        },
        toggleFollow:(userId) => {
            dispatch(toggleFollowAC(userId))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);
