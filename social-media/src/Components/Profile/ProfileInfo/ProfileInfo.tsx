import React, { useState, useEffect } from "react";
import "./ProfileInfo.scss";
import { makeStyles } from "@material-ui/core/styles";
import unnamedUserPhoto from "../../../assets/images/unnamed.png";
import ProfileStatus from "./ProfileStatus.ts";
import { IconButton } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ProfileDate from "./ProfileDate/ProfileDate";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isFetching,
  updateProfilePhoto,
  authId,
  userId,
  updateProfileData,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = React.useState<boolean>(false);

 

  if (!profile) {
    return (
      <div className='lds-default'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  const changeEditMode = () => {
    setEditMode(true);
  }

  const handleImageChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    updateProfilePhoto(file);
  };


  const submit = (value) => {
    let id = !userId ? authId : userId;

    updateProfileData(value,id);
    setEditMode(false);
  }

  return (
    <div className='profile-info'>
      <div className='profile-info__description description'>
        <div className='description__imageBlock imageBlock'>
          {profile.photos.small ? (
            <img src={profile.photos.small} alt='user' />
          ) : (
            <img src={unnamedUserPhoto} alt='user' />
          )}

          {!userId && (
            <div className='imageBlock__uploadBtn'>
              <div className={classes.root}>
                <input
                  onChange={(event) => handleImageChange(event)}
                  accept='image/*'
                  className={classes.input}
                  id='icon-button-file'
                  type='file'
                />
                <label htmlFor='icon-button-file'>
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </div>
          )}
        </div>
        <div className='description__edit-profile'>
        <ProfileStatus
          userId={userId}
          isFetching={isFetching}
          status={status}
          updateUserStatus={updateUserStatus}
        />
          { !editMode ? 
         <div>
            <button type='button' onClick={changeEditMode}>
            Edit Profile
          </button>
          <ProfileDate profile={profile} />
         </div>
        :
        <div>
          <ProfileDataForm onSubmit={submit} profile={profile}/>
          </div>
          }
        </div>
        
      </div>
     
    
    </div>
  );
};

export default ProfileInfo;
