import React from 'react';
import userPhoto from '../../assets/images/unnamed.png';
// import classNames from 'classnames/bind';
import './Users.scss';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator.tsx';


let Users = ({unFollowUser, followUser, isDisabledBtn, element:{id,name, status, photos, followed }}) =>{

    return(
        <div>
                    {
                        <div className="users-items__item">
                            <span>
                                <div>
                                    <NavLink to={`/profile/${id}`}>
                                        <img className="userAvatar" src={photos.small == null ? userPhoto : photos.small} alt="img" />
                                    </NavLink>
                                </div>
                                <div>
                                    <button disabled={ isDisabledBtn.some(el => el === id)} onClick={ followed ? () => unFollowUser(id)  :()=>followUser(id)}>
                                        {followed ? `Unfollow` : `Follow`}
                                    </button>
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {name}
                                    </div>
                                    <div>
                                        {status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {"location.country"}
                                    </div>
                                    <div>
                                        {"location.city"}
                                    </div>
                                </span>
                            </span>

                        </div>
                }
        </div>
    );
}

export default Users;