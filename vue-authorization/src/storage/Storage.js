class Storage{
    setAccessToken(tokenName ,token){
        localStorage.setItem(tokenName, JSON.stringify(token) );
    }

    getAccessToken(){
        return JSON.parse( localStorage.getItem('access_token') )
    }

    removeAccessTokenFromLocalStorage(){
        localStorage.removeItem('access_token');
    }
}

export default new Storage;