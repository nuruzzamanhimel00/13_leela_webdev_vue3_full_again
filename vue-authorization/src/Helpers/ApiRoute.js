const BASE_URL = "http://127.0.0.1:8000/api/"

const register_url = BASE_URL+'register';
const login_url = BASE_URL+'login';
const logout_url = BASE_URL+'logout';
const auth_user = BASE_URL+'user';

const get_all_post = BASE_URL+'get-all-post';

export const ApiRoute = {
    register_url,
    login_url,
    get_all_post,
    logout_url,
    auth_user
};