import React from 'react';
import userPhoto from '../../assets/images/unnamed.png';
import classNames from 'classnames/bind';
import './Users.scss';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({props, requestUsers, followUser,unFollowUser}) =>{

    let { users, pageSize,
        totalUsersCount, currentPage,isFetching,
        isDisabledBtn,sortUsers
    } = props;

   
    return(
        <div>
            <div>
                <Paginator
                totalUsersCount={totalUsersCount} 
                pageSize={pageSize}
                currentPage={currentPage}
                requestUsers={requestUsers}
                />
            </div>
              
               { isFetching ? 
               
               <div>
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