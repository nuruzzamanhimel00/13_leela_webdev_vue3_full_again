import { LOGIN_ACTION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION} from './../../storeconstants.js';
import axios from 'axios'
import {ApiRoute} from '../../../Helpers/ApiRoute.js'
import Validations from './../../../services/Validations';
import Storage from '../../../storage/Storage.js'
import router from '../../../router/index.js'

export default {
    async [LOGIN_ACTION](context, payload){
      let postData = {
          email: payload.email,
          password: payload.password,
      }
      await axios.post(ApiRoute.login_url, postData)
      .then( (response) => {

        if(response.status == 200){
          
          Storage.setAccessToken('access_token',response.data.access_token)

          context.commit(SET_USER_TOKEN_DATA_MUTATION,{
            email: response.data.email,
            userId: response.data.userId,
            accessToken: response.data.access_token,
          });
          router.push({name: 'postComp'});
          // context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true});
        }
      })
      .catch(function (error) {
        let errorMessage = Validations.getErrorMessageFromCode(error.response.data.message);
        // context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true});
        throw errorMessage;
        // console.log(errorMessage ,error);
      });
    },

    async [SIGNUP_ACTION](context, payload){
        let postData = {
            name: payload.name,
            email: payload.email,
            password: payload.password,
        }
        // context.commit(LOADING_SPINING_SHOW_MUTATION,true,{root:true});

        // if , zdi eta onno kono module hto tahle jevabe likte hto ta hlo
        // context.commit(moduleName/LOADING_SPINING_SHOW_MUTATION,true);

        await axios.post(ApiRoute.register_url, postData)
          .then( (response) => {

            if(response.status == 200){

              context.commit(SET_USER_TOKEN_DATA_MUTATION,{
                email: response.data.email,
                userId: response.data.userId,
                accessToken: response.data.access_token,
              });
              // context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true});
            }
          })
          .catch(function (error) {
            let errorMessage = Validations.getErrorMessageFromCode(error.response.data.message);

            // context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true});

            throw errorMessage;
            // console.log(errorMessage ,error);
          });

    }
}