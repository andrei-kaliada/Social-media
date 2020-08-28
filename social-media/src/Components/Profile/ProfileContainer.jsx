import React from 'react';
import Profile from './ProfileInfo/Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {setUserProfile, profileThunk} from '../../redux/profile-reducer';
import { withRouter, Redirect } from "react-router";
import withAuthRedirect  from '../../hoc/withAuthRedirect';



class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let userId = this.props.match.params.userId;  
        if(!userId){
            userId = 2;
        }
        
        this.props.profileThunk(userId);
              
    }


    render() {
        
        return (
            <Profile {...this.props} profile={this.props.userProfileData}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        userProfileData: state.profilePage.userProfileData,
        isAuth: state.auth.isAuth,
    }
}

export default compose (
    connect(mapStateToProps,{setUserProfile,profileThunk}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);