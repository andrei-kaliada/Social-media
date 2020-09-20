import React from 'react';
import classNames from 'classnames/bind';
import './Paginator.scss';



let Paginator  = ({requestUsers, ...props}) =>{

    let {  pageSize,
        totalUsersCount, currentPage
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
 
    return(
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
    );
}

export default Paginator;