import React from 'react';
import userPhoto from '../../assets/images/unnamed.png';
// import classNames from 'classnames/bind';
import './Users.scss';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UsersType } from '../../../types/types';


type UsersPropTypes = {
    users:Array<UsersType>, 
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean,
    isDisabledBtn:Array<number>,
    requestUsers:(page:number)=>void,
    followUser:(id:number)=>void,
    sortUsers:()=>void,
    unFollowUser:(id:number)=>void,
    props:any
}

let Users: React.FC<UsersPropTypes> = ({ requestUsers, followUser,unFollowUser,...props}) =>{

    let { users, pageSize,
        totalUsersCount, currentPage,isFetching,
        isDisabledBtn,sortUsers
    } = props;

   
    return(
        <div className="users">
            <div>
                <Paginator
                totalUsersCount={totalUsersCount} 
                pageSize={pageSize}
                currentPage={currentPage}
                requestUsers={requestUsers}
                />
            </div>
              
               { isFetching ? 
               
               <div className="users-items">
                   <button onClick={sortUsers}>Sort Users</button>
                    {
                    users && users.map((element) => (
                        <User
                        key={element.id}
                         element={element}
                         isDisabledBtn={isDisabledBtn}
                         followUser={followUser}
                         unFollowUser={unFollowUser}
                         />
                       
                    ))
                }
               </div>

               : 
               <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
               }
            </div>
    );
}

export default Users;