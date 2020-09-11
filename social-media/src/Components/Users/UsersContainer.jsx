import React, { Component } from 'react';
import { toggleFollow,setPageNumber,
     getUsers,followThunk, unFollowThunk} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {usersAPI, followAPI} from '../../api/api';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getUsersSelect, getPageSize,
     getTotalUsersCount, getCurrentPage,
      getIsFetching ,getIsDisabledBtn} from '../../redux/users-selectors';


class UsersContainer extends React.Component {
    

    componentDidMount() {
      
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    requestUsers = (element) =>{
       
      
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

// let mapStateToProps = (state) => {
//     return{
//         users:state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         totalUsersCount:state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         isDisabledBtn:state.usersPage.isDisabledBtn,
//     }
// }

let mapStateToProps = (state) => {
    return{
        users:getUsersSelect(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        isDisabledBtn:getIsDisabledBtn(state),
    }
}




export default compose(
    connect(mapStateToProps, {getUsers,followThunk,unFollowThunk}),
    // withAuthRedirect,
    )
    (UsersContainer);
