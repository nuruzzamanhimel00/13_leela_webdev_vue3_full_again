import {SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION} from './../../storeconstants.js';
import axios from 'axios'
import {ApiRoute} from '../../../Helpers/ApiRoute.js'

export default {

    async [SIGNUP_ACTION](context, payload){
        let postData = {
            name: payload.name,
            email: payload.email,
            password: payload.password,
        }
      await axios.post(ApiRoute.register_url, postData)
          .then( (response) => {
            if(response.status == 200){
              context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                email: response.data.email,
                userId: response.data.userId,
                accessToken: response.data.access_token,
              })
            }
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

         
        // console.log(postData, payload);
    }
}