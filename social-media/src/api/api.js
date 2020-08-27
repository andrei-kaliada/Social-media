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

      auth(){
        return  instance.get(`auth/me`).then(response => response.data);
      },

      profile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);

    }

}



