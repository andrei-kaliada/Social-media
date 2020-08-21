import React from 'react';
import userPhoto from '../../assets/images/unnamed.png';
import classNames from 'classnames/bind';
import './Users.scss';
import { NavLink } from 'react-router-dom';


let Users = ({props, requestUsers, followUser,unFollowUser}) =>{

    let { users, follow, unfollow,
        setUsers, toggleFollow, pageSize,
        totalUsersCount, currentPage,setPageNumber,isFetching
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

 
    return(
        <div>
                <div>
                    {
                        pages.map((el, index) => (
                            el === 5 ? ' ... ' : el < 5 || el >= pages.length-3 ? 
                            <span
                            key={index}
                             onClick={()=>{requestUsers(el)}}
                                className={classNames('pageCount',
                                    currentPage === el && "selectedPage")} >
                                {el}
                            </span>
                            : null
                        ))
                    }
                </div>
               { isFetching ? 
               
               <div>
                    {
                    users && users.map((element) => (

                        <div key={element.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${element.id}`}>
                                        <img className="userAvatar" src={element.photos.small == null ? userPhoto : element.photos.small} alt="img" />
                                    </NavLink>
                                </div>
                                <div>
                                    {/* {element.followed ? 
                                        <button onClick={()=>{unfollow(element.id)}}> Unfollow </button>
                                         :<button onClick={()=>{follow(element.id)}}> Follow </button> } */}
                                    {/* <button  onClick={element.followed === true ? ()=>unfollow(element.id)
                                                        : ()=>follow(element.id)}>
                                             {element.followed ? `Unfollow`:`Follow`}
                                         </button> */}
                                    <button onClick={ element.followed ? () => unFollowUser(element.id)  :()=>followUser(element.id)}>
                                        {element.followed ? `Unfollow` : `Follow`}
                                    </button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {element.name}
                                    </div>
                                    <div>
                                        {element.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {"element.location.country"}
                                    </div>
                                    <div>
                                        {"element.location.city"}
                                    </div>
                                </span>
                            </span>

                        </div>
                    ))
                }
               </div>

               : 
               <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
               }
            </div>
    );
}

export default Users;