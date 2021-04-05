import React from 'react';
import profileReducer from './profile-reducer.ts';
import {addPostActionCreator, deletePost} from './profile-reducer.ts';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'Hello', likeCount: 11 },
        { id: 3, message: 'I am fine', likeCount: 10 },
    ]
};

it('length of posts should be incremented',()=>{

    // 1. test data
  
  
    let action = addPostActionCreator('something text');

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expection
   expect(newState.posts.length).toBe(4);

})


it('message of new post should be correct',()=>{

    // 1. test data
  
  
    let action = addPostActionCreator('something text');

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expection
   expect(newState.posts[3].message).toBe('something text');

})


it('after deleting length of messages should be decrement',()=>{

    // 1. test data
  
  
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expection
   expect(newState.posts.length).toBe(2);

})

it(`after deleting length shouldn't be decrement if id is incorrect `,()=>{

    // 1. test data
  
  
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expection
   expect(newState.posts.length).toBe(3);

})