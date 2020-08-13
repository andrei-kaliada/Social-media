import React from 'react';
import './ProfileInfo.scss';


const ProfileInfo = (props) => {
    if(!props.profile){
       return <div>Preloader</div>
    }
    
 
    
    return (
        <>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
            </div>
            <div className="descriptionBlock">
                <img src={props.profile.photos.small} alt="user"/>
    <p>{props.profile.aboutMe}</p>
                ava + description
            </div>
        </>
    );
}

export default ProfileInfo;