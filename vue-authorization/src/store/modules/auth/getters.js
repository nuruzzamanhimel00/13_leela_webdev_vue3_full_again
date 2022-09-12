import { GET_ACCESS_TOKEN } from "@/store/storeconstants";

export default{
    [GET_ACCESS_TOKEN](state){
        return state.accessToken;
    }
}