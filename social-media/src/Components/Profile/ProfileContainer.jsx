import React from 'react';
import Profile from './ProfileInfo/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component{
    constructor(props){
        super(props);

    }

    // componentDidMount(){
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //     .then( response => console.log(response));
    // }


    render(){
        return (
            <Profile {...this.props} />
        );
    }
}

export default ProfileContainer;