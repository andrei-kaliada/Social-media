import React from 'react';
import Profile from './ProfileInfo/Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile, profileThunk} from '../../redux/profile-reducer';
import { withRouter } from "react-router";

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
    }
}

export default connect(mapStateToProps,
    {
        setUserProfile,
        profileThunk
    }
)(withRouter(ProfileContainer));