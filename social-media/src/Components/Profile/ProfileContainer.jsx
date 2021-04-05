import React, {useEffect} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setUserProfile, profileThunk, getUserStatus, updateUserStatus, updateProfilePhoto, updateProfileData} from '../../redux/profile-reducer.ts';
import { withRouter, Redirect } from "react-router";
import withAuthRedirect  from '../../hoc/withAuthRedirect';

// componentDidMount() {
    
//     let userId = this.props.match.params.userId;  
    
   
//     if(!userId){
//         userId = this.props.authId;
//         // if(!userId){
//         //     this.props.history.push('/login')
//         // }
//     }
    
//     this.props.profileThunk(userId);
//     this.props.getUserStatus(userId);
          
// }

const ProfileContainer = props => {

    useEffect(()=>{
        let userId = props.match.params.userId;  
        console.log("Hello");
        console.log(userId);
        if(!userId){
            userId = props.authId;
            // if(!userId){
            //     this.props.history.push('/login')
            // }
        }
        
        props.profileThunk(userId);
        props.getUserStatus(userId);
    },[props.match.params.userId])

    console.log('Profile');

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

 

  return <Profile {...props} userId={props.match.params.userId} profile={props.userProfileData} />;
};


let mapStateToProps = (state) => {
    return {
        userProfileData: state.profilePage.userProfileData,
        isAuth: state.auth.isAuth,
        status:state.profilePage.status,
        isFetching:state.profilePage.isFetching,
        authId:state.auth.id,
    }
}

export default compose (
    connect(mapStateToProps,{setUserProfile,profileThunk, getUserStatus, updateUserStatus, updateProfilePhoto, updateProfileData}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);