import { FETCH_ALL_POST, GET_ALL_POST_ACTION, LOADING_SPINING_SHOW_MUTATION, SET_ALL_POST } from "@/store/storeconstants";
import axios from 'axios'
import {ApiRoute} from '../../../Helpers/ApiRoute.js'
import Api from '../../../Helpers/Api.js'

export default {
    namespaced: true,
    state: {
        allPost:[],

    },
    getters: {
      [FETCH_ALL_POST](state){
        return state.allPost;
      }
    },
    mutations:{
      [SET_ALL_POST](state, payload){
        state.allPost = payload;
      }
    },
    actions:{
        [GET_ALL_POST_ACTION](context){
          context.commit(LOADING_SPINING_SHOW_MUTATION,true,{root:true} );
             // if , zdi eta onno kono module hto tahle jevabe likte hto ta hlo
        // context.commit(moduleName/LOADING_SPINING_SHOW_MUTATION,true);
          axios.get(ApiRoute.get_all_post,{
            headers: Api.getHeaderWitAuth()
          })
          .then( (response) => {
            // console.log(response);
            if(response.status == 200){
              context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true} );
              context.commit(SET_ALL_POST, response.data.data)
              // context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:false});
                 // if , zdi eta onno kono module hto tahle jevabe likte hto ta hlo
              // context.commit(moduleName/LOADING_SPINING_SHOW_MUTATION,true);
            }
          })
          .catch(function () {
            context.commit(LOADING_SPINING_SHOW_MUTATION,false,{root:true} );
          });
        }
    },
}