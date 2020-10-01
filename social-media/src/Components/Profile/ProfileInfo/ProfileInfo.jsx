import React, {useState, useEffect} from 'react';
import './ProfileInfo.scss';
import { makeStyles } from '@material-ui/core/styles';
import unnamedUserPhoto from '../../../assets/images/unnamed.png';
import ProfileStatus from './ProfileStatus';
import {IconButton} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const ProfileInfo = ({profile, status, updateUserStatus, isFetching, updateProfilePhoto, authId, userId}) => {

    const classes = useStyles();
    // const [pictures, setPictures] = useState(null);

    useEffect(()=>{

    },[])


    if(!profile){
       return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    const handleImageChange = (e) => {
      e.preventDefault();
  
      let file = e.target.files[0];
      updateProfilePhoto(file);
  
     
    }

    // const fileUploadHandler = (e) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append('file',pictures, pictures.name);
    //   updateProfilePhoto(formData);
    // }
    
   
    return (
        <>
        {/* <div>
   <label for="file">Choose file to upload</label>
   <input onChange={(event)=> handleImageChange(event) } type="file" id="file" name="file" multiple />
 </div> */}

  {!userId  && <div>
  <div className={classes.root}>
      <input onChange={(event)=> handleImageChange(event) } accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  </div>
  }
    
            <div className="descriptionBlock">
            { profile.photos.small ?
            <img src={profile.photos.small} alt="user"/> :
            <img src={unnamedUserPhoto} alt="user"/>  
        }
                <p>{profile.aboutMe}</p>
                <ProfileStatus 
                userId={userId}
                isFetching={isFetching}
                status={status}
                updateUserStatus={updateUserStatus}
                />
            </div>
        </>
    );
}

export default ProfileInfo;