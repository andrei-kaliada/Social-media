import React from 'react';
import { getUsers,followThunk, unFollowThunk, sortUsers} from '../../redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
//@ts-ignore
import {getUsersSelect, getPageSize,
     getTotalUsersCount, getCurrentPage,
      getIsFetching ,getIsDisabledBtn} from '../../redux/users-selectors';
import { UsersType } from '../../../types/types';
import { AppStateType } from '../../redux/redux-store';



type MapStateToPropsType = {
    currentPage:number,
    pageSize:number,
    users:Array<UsersType>, 
    totalUsersCount:number,
    isFetching:boolean,
    isDisabledBtn:Array<number>,

}

type MapDispatchToPropsType = {

    getUsers:(currentPage:number, pageSize:number)=>void,
    followThunk:(id:number)=>void,
    unFollowThunk:(id:number)=>void,
    sortUsers:()=>void,
   

}

type OwnPropsType = {
    title:string
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;


class UsersContainer extends React.Component <PropsType> {
    

    componentDidMount() {
      const {currentPage, pageSize} = this.props;

        this.props.getUsers(currentPage,pageSize);
    }

    requestUsers = (page:number) =>{
       const {pageSize} = this.props;
      
        this.props.getUsers(page,pageSize);
  
    }

    followUser = (id:number) => {
        
        this.props.followThunk(id);
        
    }

    unFollowUser = (id:number) => {
       this.props.unFollowThunk(id);
        
    }

  


    render() {
        const {currentPage, pageSize,sortUsers,users,totalUsersCount,isFetching,isDisabledBtn} = this.props;
        return (
            <Users
             props={this.props}
             isDisabledBtn={isDisabledBtn}
             isFetching={isFetching}
             currentPage={currentPage}
             totalUsersCount={totalUsersCount}
             users={users}
             pageSize={pageSize}
             requestUsers={this.requestUsers}
             followUser={this.followUser}
             unFollowUser={this.unFollowUser}
             sortUsers={sortUsers}
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

let mapStateToProps = (state:AppStateType): MapStateToPropsType => {
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
    connect<MapStateToPropsType,MapDispatchToPropsType,OwnPropsType,AppStateType>(mapStateToProps, {getUsers,followThunk,unFollowThunk, sortUsers}),
    withAuthRedirect,
    )
    (UsersContainer);
