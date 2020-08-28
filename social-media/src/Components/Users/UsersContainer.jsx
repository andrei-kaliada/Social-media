import React, { Component } from 'react';
import { toggleFollow,setPageNumber,
     getUsers,followThunk, unFollowThunk} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {usersAPI, followAPI} from '../../api/api';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.requestUsers = this.requestUsers.bind(this);
    }

    componentDidMount() {
      
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    requestUsers = (element) =>{
       
        this.props.setPageNumber(element);
        this.props.getUsers(element,this.props.pageSize);
  
    }

    followUser = (id) => {
        
        this.props.followThunk(id);
        
    }

    unFollowUser = (id) => {
       this.props.unFollowThunk(id);
        
    }

  


    render() {
        return (
            <Users
             props={this.props}
             requestUsers={this.requestUsers}
             followUser={this.followUser}
             unFollowUser={this.unFollowUser}
           
            />
        );
    };
}

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        isDisabledBtn:state.usersPage.isDisabledBtn,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         setUsers:(users) => {
//             dispatch(setUsersAC(users))
//         },
//         follow:(userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         toggleFollow:(userId) => {
//             dispatch(toggleFollowAC(userId))
//         },
//         setPageNumber:(currentPage) => {
//             dispatch(selectPageNumber(currentPage));
//         },
//         getTotalCount:(totalCount) => {
//             dispatch(setTotalCount(totalCount));
//         },
//         setFetchingStatus:(status)=>{
//             dispatch(changeFetchingStatus(status));
//         }

//     }
// }



export default compose(
    connect(mapStateToProps, {setPageNumber,getUsers,followThunk,unFollowThunk}),
    withAuthRedirect
    )
    (UsersContainer);
