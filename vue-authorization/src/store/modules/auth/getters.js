import { GET_ACCESS_TOKEN, USER_IS_AUTHONTICATED_CHECK } from "@/store/storeconstants";

export default{
    [GET_ACCESS_TOKEN](state){
        return state.accessToken;
    },
    [USER_IS_AUTHONTICATED_CHECK](state){
        return state.accessToken;
    }
}