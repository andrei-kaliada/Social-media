import React, { Component} from 'react';
import Post from './Post/Post';
import './MyPosts.scss';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';




const MyPosts = ({newPostsText, posts,updateNewPostText, addPost}) => {

   

    let addPostElem = () => {
       addPost();
        
    }

    let onPostChange = (event) => {
        updateNewPostText(event.target.value);
      
    }
    
        return (
            <div className="bostsBlock">
                <div className="bostsBlock__title">
                    <h3>My posts</h3>
                </div>
                <div>
                    <div>
                        <textarea onChange={onPostChange}  value={newPostsText}/>
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