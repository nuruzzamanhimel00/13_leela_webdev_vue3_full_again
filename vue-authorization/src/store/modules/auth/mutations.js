import { SET_USER_TOKEN_DATA_MUTATION } from "@/store/storeconstants";

export default{
    [SET_USER_TOKEN_DATA_MUTATION](state, payload){
        state.email = payload.email;
        state.userId = payload.userId;
        state.accessToken = payload.accessToken;
    }
}