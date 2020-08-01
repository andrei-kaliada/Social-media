import React from 'react';
import './Users.scss';
import axios from 'axios';
import userPhoto from '../../assets/images/unnamed.png';


class Users extends React.Component{
    constructor(props){
        super(props);
        let config = {
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }
        
        }
    
        axios.get('https://social-network.samuraijs.com/api/1.0/users',config).then(result => {
            console.log(result);
            this.props.setUsers(result.data.items);
        });
       }
    

    render(){
        let {users, follow, unfollow, setUsers,toggleFollow} = this.props;
        return (
            <div>
                {
                    users && users.map((element) => (
    
                        <div key={element.id+1}>
                            <span>
                                <div>
                                    <img className="userAvatar" src={element.photos.small == null ? userPhoto : element.photos.small} alt="img" />
                                </div>
                                <div>
                                    
                                        {/* {element.followed ? 
                                        <button onClick={()=>{unfollow(element.id)}}> Unfollow </button>
                                         :<button onClick={()=>{follow(element.id)}}> Follow </button> } */}
                                         {/* <button  onClick={element.followed === true ? ()=>unfollow(element.id)
                                                        : ()=>follow(element.id)}>
                                             {element.followed ? `Unfollow`:`Follow`}
                                         </button> */}
                                         <button  onClick={()=>toggleFollow(element.id)}>
                                             {element.followed ? `Unfollow`:`Follow`}
                                         </button>
                                  
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {element.name}
                                    </div>
                                    <div>
                                        {element.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {"element.location.country"}
                                    </div>
                                    <div>
                                        {"element.location.city"}
                                    </div>
                                </span>
                            </span>
    
                        </div>
                    ))
                }
            </div>
        );
    };
}

export default Users;