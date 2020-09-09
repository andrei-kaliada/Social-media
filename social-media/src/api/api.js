import axios from 'axios';

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
            headers: {
                'API-KEY': '2f292005-e95d-404f-9882-29787c1d81a0'
            }
})

export const usersAPI = {
    getUsers(currentPage,pageSize){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
      
      },

      follow(id){
        return  instance.post(`follow/${id}`).then(response => response.data);
          },

  
      unFollow(id){
          return instance.delete(`follow/${id}`).then(response => response.data);
      },

      

      profile(userId){
    
        return profileAPI.getProfile(userId);

    }

}


export const profileAPI = {

    getProfile(userId){
      return instance.get(`profile/${userId}`).then(response => response.data);

  },

  getStatus(userId){
    return instance.get(`/profile/status/${userId}`).then(response => response.data);
  }, 
  
  updateStatus(status){
    return instance.put(`profile/status/`,{
      status
    })
  }

}

export const autAPI = {
  auth(){
    return  instance.get(`auth/me`).then(response => response.data);
  },
}

export const loginAPI = {
  logIn({email,password,rememberMe = false}){
    return instance.post(`/auth/login`,{
      email,
      password,
      rememberMe
    }).then(response => response.data);
  },

  logOut(){
    return instance.delete(`/auth/login`).then(response => response.data);
  }
}



