export type PostsType = {
    id:number,
    message:string,
    likeCount:number
}

export type ContactsType = {
    github:string,
    vk:string,
    facebook:string,
    instagram:string,
    twitter:string,
    website:string,
    youtube:string,
    mainLink:string, 

}

export type PhotosType = {
    small:string | null,
    large: string | null
}

export type ProfileType = {
    userId:number,
    lookingForAJob:boolean,
    lookingForAJobDescription:string,
    fullname:string,
    contacts:ContactsType,
    photos:PhotosType
}

export type UsersType = {
    name:string,
    id:number,
    photos:PhotosType,
    status: string,
    followed:boolean
}