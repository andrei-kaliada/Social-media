import React, { Component} from 'react';
import Post from './Post/Post';
import './MyPosts.scss';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';




const MyPosts = ({dispatch, newPostsText, posts}) => {
    let newPostElement = React.createRef();

    let addPostElem = () => {
        let text = newPostElement.current.value;
        dispatch(addPostActionCreator())

    }

    let onPostChange = (event) => {
        let text = newPostElement.current.value;
          dispatch(updateNewPostTextActionCreator(text))
    }
    
        return (
            <div className="bostsBlock">
                <div className="bostsBlock__title">
                    <h3>My posts</h3>
                </div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={newPostsText}/>
                    </div>
                    <div>
                        <button onClick={addPostElem}>Add post</button>
                    </div>
                </div>
                <div className="posts">
                    {posts && posts.map( (post) =>(
                          <Post
                          key={post.id}
                          message={post.message}
                          likes={post.likeCount}
                      />
                    ))}
                    
                </div>
            </div>
        );
    }

export default MyPosts;