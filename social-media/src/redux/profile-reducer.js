const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const NEW_USER_PROFILE = 'NEW_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'Hello', likeCount: 11 },
        { id: 3, message: 'I am fine', likeCount: 10 },
    ],
    newPostsText: 'Something',
    userProfileData:null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostsText,
                }],
                newPostsText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostsText: action.newText
            }
        case NEW_USER_PROFILE:
            return{
                ...state,
                userProfileData:action.userData
            }
        default: return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const setUserProfile = (userData) => {
    return{
        type:NEW_USER_PROFILE,
        userData
    }
}

export default profileReducer;