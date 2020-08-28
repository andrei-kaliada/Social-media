import React from 'react';
import './ProfileInfo.scss';
import unnamedUserPhoto from '../../../assets/images/unnamed.png';


const ProfileInfo = (props) => {
    if(!props.profile){
       return <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    
 
    
    return (
        <>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
            </div>
            <div className="descriptionBlock">
            { props.profile.photos.small ?
            <img src={props.profile.photos.small} alt="user"/> :
            <img src={unnamedUserPhoto} alt="user"/>  
        }
                <p>{props.profile.aboutMe}</p>
                ava + description
            </div>
        </>
    );
}

export default ProfileInfo;