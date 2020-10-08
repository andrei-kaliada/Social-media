import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const NEW_USER_PROFILE = 'NEW_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const CHANGE_FETCHING = 'CHANGE_FETCHING';
const REVERCE_MESSAGES = 'REVERCE_MESSAGES';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'Hello', likeCount: 11 },
        { id: 3, message: 'I am fine', likeCount: 10 },
    ],
    newPostsText: 'Something',
    userProfileData: null,
    status: "",
    isFetching:false
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.text,
                }],
                newPostsText: '',
            }
        case DELETE_POST:
            return{
                ...state,
                posts:[...state.posts.filter( el => el.id !== action.id)]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostsText: action.newText
            }
        case NEW_USER_PROFILE:
            return {
                ...state,
                userProfileData: action.userData
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case CHANGE_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching
            }
        case REVERCE_MESSAGES:
            return{
                ...state,
                posts:[...state.posts.reverse()]
            }
        case SAVE_PHOTO_SUCCESS:
            return{
                ...state,
                userProfileData:{
                    ...state.userProfileData,
                    photos:action.photos
                }
            }
        case SET_PROFILE_DATA:
            return{
                ...state,
                userProfileData:{...action.data}
            }
        default: return state;
    }
}

export const deletePost = (id) => {
    return{
        type:DELETE_POST,
        id
    }
}

export const reverseMessages = () => {
    return {
        type:REVERCE_MESSAGES
    }
}


export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const setUserProfile = (userData) => {
    return {
        type: NEW_USER_PROFILE,
        userData
    }
}


export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const changeFetching = (isFetching) => {
    return{
        type:CHANGE_FETCHING,
        isFetching
    }
}

export  const savePhotoSuccess = (photos) => {
 
    return{
        type:'SAVE_PHOTO_SUCCESS',
        photos
    }
}

export const setProfileData = (data) => {
    return{
        type:"SET_PROFILE_DATA",
        data
    }
}

export const profileThunk = (userId) => async (dispatch) => {

    let dataUser = await usersAPI.profile(userId)
        dispatch(setUserProfile(dataUser));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let dataGetStatus = await profileAPI.getStatus(userId)
    dispatch(setStatus(dataGetStatus))
}



export const updateUserStatus = (status) => async (dispatch) => {
    dispatch(changeFetching(true));
    let dataUpdateStatus = await profileAPI.updateStatus(status)
    if(dataUpdateStatus.data.resultCode === 0){
        dispatch(setStatus(status));
        dispatch(changeFetching(false));
       }

}

export const updateProfilePhoto = (image) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(image);

    if(response.resultCode === 0){
        
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const updateProfileData = (data) => async (dispatch) =>{
    let response = await profileAPI.updateProfile(data);
    console.log(response);
    if(response.resultCode === 0){
        let dataUser = await usersAPI.profile(data.userId)
        dispatch(setUserProfile(dataUser));
    }
}

export default profileReducer;