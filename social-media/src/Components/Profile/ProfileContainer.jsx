import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setUserProfile, profileThunk, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router";
import withAuthRedirect  from '../../hoc/withAuthRedirect';



class ProfileContainer extends React.Component {
 

    componentDidMount() {
        let userId = this.props.match.params.userId;  
        console.log(userId)
        if(!userId){
            userId = this.props.authId;
        }
        
        this.props.profileThunk(userId);
        this.props.getUserStatus(userId);
              
    }


    render() {

        if(!this.props.isAuth){
            return <Redirect to="/login"/>
        }
        
        return (
            <Profile {...this.props} profile={this.props.userProfileData}/>
        );
    }
}


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
    connect(mapStateToProps,{setUserProfile,profileThunk, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);