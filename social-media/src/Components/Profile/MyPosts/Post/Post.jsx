import React from 'react';
import './Post.scss';

const Post = ({ message, likeCount}) => {

        return (
            <div className="wrapper-post">
                <div className="wrapper-post__message">
                    <div className="wrapper-post__message-img">
                        <img src="http://wpkixx.com/html/pitnik/images/resources/author.jpg" alt=""/>
                        <p>Like:{likeCount}</p>
                        <p>Message:{message}</p>
                    </div>
                    {/* <div className="wrapper-post__message-text">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Share some what you thinking?"></textarea>
                    </div> */}
                </div>
            </div>
        );
    }

export default Post;