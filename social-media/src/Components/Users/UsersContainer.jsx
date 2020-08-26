import React, { Component } from 'react';
import {follow, unfollow, toggleFollow,
    setPageNumber, toggleDisabledButton, getUsers} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {usersAPI, followAPI} from '../../api/api';
import {connect} from 'react-redux';


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
        this.props.getUsersThunkCreator(element,this.props.pageSize);
  
    }

    followUser = (id) => {
        
        this.props.toggleDisabledButton(id,true);
        followAPI.follow(id)
        .then(data => {
            if(data.resultCode === 0){
                this.props.follow(id);
               
            }
            this.props.toggleDisabledButton(id,false);
            console.log(data);
            
        });
        
    }

    unFollowUser = (id) => {
        this.props.toggleDisabledButton(id,true);
        followAPI.unFollow(id)
        .then(data =>{
            if(data.resultCode === 0){
                this.props.unfollow(id);
                
            }
            this.props.toggleDisabledButton(id,false);
        });
        
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



export default connect(mapStateToProps, 
    {
        follow,
        unfollow,
        toggleFollow,
        setPageNumber,
        toggleDisabledButton,
        getUsers
    }
    )(UsersContainer);
