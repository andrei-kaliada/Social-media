import React from 'react';
import Contact from '../ContactProfile/ContactProfile';

export default function ProfileDate({profile}){
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
