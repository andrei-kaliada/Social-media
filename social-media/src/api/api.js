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
      
      }
}

