import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '@/Helpers/Api'

function UserCreate(data){

    return new Promise((resolve, reject) => {
        return axios.post(apiRoutes.USER_CREATE_POST, {
            'name' : data.name,
            'email' : data.email,
            'password' : data.password,
        }, {
            headers: ApiHeader.getHeaderWithoutAuth()
        })
            .then(response => {
                alert(response.data.message);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
            .finally(function (re) {
                // always executed
                resolve(re);
              });
    });
    // console.log(data);
}

export const UserService = {
    UserCreate,
}