import { usersAPI, profileAPI } from '../api/api';
import {PostsType,ContactsType,PhotosType,ProfileType} from '../../types/types';
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
    ] as Array<PostsType>,
    newPostsText: 'Something' as String,
    userProfileData: null as ProfileType | null,
    status: "" as string,
    isFetching:false as boolean
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.text,
                    likeCount:0
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
                } as ProfileType
            }
        case SET_PROFILE_DATA:
            return{
                ...state,
                userProfileData:{...action.data}
            }
        default: return state;
    }
}

type DeletePostType = {
    type: typeof DELETE_POST,
    id:number
}

export const deletePost = (id:number): DeletePostType => {
    return{
        type:DELETE_POST,
        id
    }
}

type ReverseMessages = {
    type: typeof REVERCE_MESSAGES
}

export const reverseMessages = () : ReverseMessages => {
    return {
        type:REVERCE_MESSAGES
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    text: string
    
}

export const addPostActionCreator = (text:string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        text
    }
}

type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}

export const updateNewPostTextActionCreator = (text:string): UpdateNewPostTextActionCreatorType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

type SetUserProfileType = {
    type: typeof NEW_USER_PROFILE,
    userData:ProfileType
}

export const setUserProfile = (userData:ProfileType):SetUserProfileType => {
    return {
        type: NEW_USER_PROFILE,
        userData
    }
}

type SetStatusString = {
    type: typeof SET_STATUS,
    status:string
}

export const setStatus = (status:string) : SetStatusString => {
    return {
        type: SET_STATUS,
        status
    }
}

type changeFetchingType = {
    type: typeof CHANGE_FETCHING,
    isFetching: boolean
}

export const changeFetching = (isFetching:boolean): changeFetchingType => {
    return{
        type:CHANGE_FETCHING,
        isFetching
    }
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos:PhotosType
} 

export  const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessType => {
 
    return{
        type:SAVE_PHOTO_SUCCESS,
        photos
    }
}

type SetProfileDataType = {
    type:typeof SET_PROFILE_DATA,
    data:ProfileType
}

export const setProfileData = (data:ProfileType):SetProfileDataType => {
    return{
        type:SET_PROFILE_DATA,
        data
    }
}

export const profileThunk = (userId:number) => async (dispatch:any) => {

    let dataUser = await usersAPI.profile(userId)
        dispatch(setUserProfile(dataUser));
}

export const getUserStatus = (userId:number) => async (dispatch:any) => {
    let dataGetStatus = await profileAPI.getStatus(userId)
    dispatch(setStatus(dataGetStatus))
}



export const updateUserStatus = (status:string) => async (dispatch:any) => {
    dispatch(changeFetching(true));
    let dataUpdateStatus = await profileAPI.updateStatus(status)
    if(dataUpdateStatus.data.resultCode === 0){
        dispatch(setStatus(status));
        dispatch(changeFetching(false));
       }

}

export const updateProfilePhoto = (image:any) => async (dispatch:any) => {
    let response = await profileAPI.updatePhoto(image);

    if(response.resultCode === 0){
        
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const updateProfileData = (dataProfile:ProfileType,userId:number) => async (dispatch:any,getState:any) =>{
    
    const id = getState().auth.userId;

    let response = await profileAPI.updateProfile(dataProfile);
    console.log(response);
   
    if(response.resultCode === 0){
        let dataUser = await usersAPI.profile(userId)
        
        dispatch(setUserProfile(dataUser));
    }else{
        
    }
}

export default profileReducer;