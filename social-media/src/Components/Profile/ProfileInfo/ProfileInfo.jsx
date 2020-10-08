import React, { useState, useEffect } from 'react';
import './ProfileInfo.scss';
import { makeStyles } from '@material-ui/core/styles';
import unnamedUserPhoto from '../../../assets/images/unnamed.png';
import ProfileStatus from './ProfileStatus';
import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProfileInfo = ({ profile, status, updateUserStatus, isFetching, updateProfilePhoto, authId, userId, updateProfileData }) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState(null);
  const [lookingForAJob, setLookingForAJob] = React.useState(null);
  const [lookingForAJobDescription, setLookingForAJobDescription] = React.useState(null);
  const [contacts, setContacts] = React.useState({});

 console.log(profile);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  if (!profile) {
    return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }

  const handleImageChange = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    updateProfilePhoto(file);
  }

  const hundlerUpdateProfile = () => {
    let data = {
      userId:authId,
      lookingForAJob:true,
      lookingForAJobDescription:'Nice job',
      fullName:fullName,
      aboutMe:'Always be yourself, express yourself, have faith in yourself',
      contacts:{
        github:'',
          vk:'',
          facebook:'',
          instagram:'',
          twitter:'',
          website:'',
          youtube:'',
          mainLink:'',
      }
    }
    updateProfileData(data);
  }

  return (
    <div className="profile-info">
      <div className="profile-info__description description">
        <div className="description__imageBlock imageBlock">
          {profile.photos.small ?
            <img src={profile.photos.small} alt="user" /> :
            <img src={unnamedUserPhoto} alt="user" />
          }
         
          
          {!userId &&
            <div className="imageBlock__uploadBtn">
              <div className={classes.root}>
                <input onChange={(event) => handleImageChange(event)} accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </div>
          }
        </div>
      <div className="description__edit-profile">
      <button type="button" onClick={handleOpen}>
        Edit Profile
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <div className="modal__header">
                <h3>Edit Profile</h3>
              </div>
              <div className="modal__main-content main-content">
                <p>Customize Your Intro</p>
                <div className="main-content__inputs">
                  <p>Full name: <input onChange={e=>setFullName(e.target.value)} type="text"/></p>
                </div>
              </div>
              <div className="modal__editBtn">
                <button onClick={hundlerUpdateProfile}>Edit Your About Info</button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
        <ProfileStatus
          userId={userId}
          isFetching={isFetching}
          status={status}
          updateUserStatus={updateUserStatus}
        />
      </div>
     <ProfileDate profile={profile} />
    </div>
  );
}

const ProfileDate = ({profile}) => {
  return (
    <>
      <div className="description__fullName">
    <p>Full name:{profile.fullName}</p>
  </div>
  <div className="description__aboutMe">
    <p>{profile.aboutMe}</p>
  </div>
  <div className="description__job">
  <p>Locking for a job:{profile.lookingForAJob ? 'Yes' : 'No'}</p>
    {profile.lookingForAJob && 
      <p>My professional skills:{profile.lookingForAJobDescription}</p>
    }
  </div>
  <div className="description__contacts">
  <p>Contacts:{
      Object.keys(profile.contacts).map( key => (
        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      ))
    }</p>
</div>
    </>
  );
}

const Contact = ({contactTitle, contactValue}) => {

  return(
    <p>
      {`${contactTitle}:${contactValue}`}
    </p>
  );
}

export default ProfileInfo;