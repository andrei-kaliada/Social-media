import React, { Component } from 'react';
import {setUsers,follow, 
    unfollow, toggleFollow,
    setPageNumber,getTotalCount,
    setFetchingStatus} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {connect} from 'react-redux';


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        // this.requestUsers = this.requestUsers.bind(this);
    }

    componentDidMount() {
        let config = {
            withCredentials:true,
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }

        }
        this.props.setFetchingStatus(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        , config).then(result => {
            console.log(result);
            this.props.setUsers(result.data.items);
            this.props.getTotalCount(result.data.totalCount);
            this.props.setFetchingStatus(true);
        });
    }

    requestUsers = (element) =>{
        console.log(this);
        this.props.setPageNumber(element);
        let config = {
            withCredentials:true,
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }

        }
        this.props.setFetchingStatus(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${element}&count=${this.props.pageSize}`
            , config).then(result => {
                console.log(result);
                this.props.setUsers(result.data.items);
                this.props.setFetchingStatus(true);
            });
  
    }

    followUser = (id) => {
        
        
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
            withCredentials:true,
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }
        })
        .then(response => {
            if(response.data.resultCode === 0){
                this.props.follow(id);
            }
            console.log(response);
            
        });
    }

    unFollowUser = (id) => {
        
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
            withCredentials:true,
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }
        })
        .then(response =>{
            if(response.data.resultCode === 0){
                this.props.unfollow(id);
            }
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
        setUsers,
        follow,
        unfollow,
        toggleFollow,
        setPageNumber,
        getTotalCount,
        setFetchingStatus,
    }
    )(UsersContainer);
