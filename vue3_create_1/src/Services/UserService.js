import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '@/Helpers/Api'

function UserCreate(data){

    return new Promise((resolve) => {
        return axios.post(apiRoutes.USER_CREATE_POST, {
            'name' : data.name,
            'email' : data.email,
            'password' : data.password,
        }, {
            headers: ApiHeader.getHeaderWithoutAuth()
        })
            .then(response => {
                alert(response.data.message);
             
                resolve(response.data);
            })
            // .catch(error => console.log("error = ",error))
            .catch(error => alert(error))
    });
    // console.log(data);
}

function UserUpdate(data){

    return new Promise((resolve) => {
        return axios.put(apiRoutes.SINGLE_USER+`/${data.id}`, {
            'name' : data.name,
            'email' : data.email,
        }, {
            headers: ApiHeader.getHeaderWithoutAuth()
        })
            .then(response => {
                alert(response.data.message);
                
                resolve(response.data);
            })
            // .catch(error => console.log("error = ",error))
            .catch(error => alert(error))
    });
    // console.log(data);
}



export const UserService = {
    UserCreate,
    UserUpdate
}