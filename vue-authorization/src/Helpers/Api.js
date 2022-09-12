import Storage from '../storage/Storage.js'

export default class Api{
    static getHeaderWithoutAuth(){
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          };
    }
    static getHeaderWitAuth(){
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${Storage.getAccessToken()}`
            // 'Authorization' : 'Bearer '+Storage.getAccessToken()
          };
    }
}