class Api{
    
    static getHeaderWithoutAuth(){
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          };
    }
}

export default Api;
