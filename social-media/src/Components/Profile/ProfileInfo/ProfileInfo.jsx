import React from 'react';
import './ProfileInfo.scss';
import { makeStyles } from '@material-ui/core/styles';
import unnamedUserPhoto from '../../../assets/images/unnamed.png';
import ProfileStatus from './ProfileStatusWithHooks';
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

const ProfileInfo = ({profile, status, updateUserStatus, isFetching}) => {
    const classes = useStyles();

    if(!profile){
       return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    
   
    return (
        <>

<div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
            {/* <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
            </div> */}
            <div className="descriptionBlock">
            { profile.photos.small ?
            <img src={profile.photos.small} alt="user"/> :
            <img src={unnamedUserPhoto} alt="user"/>  
        }
                <p>{profile.aboutMe}</p>
                <ProfileStatus 
                isFetching={isFetching}
                status={status}
                updateUserStatus={updateUserStatus}
                />
            </div>
        </>
    );
}

export default ProfileInfo;