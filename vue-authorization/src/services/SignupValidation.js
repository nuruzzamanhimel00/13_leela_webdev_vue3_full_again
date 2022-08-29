import Validations from "./Validations.js";

export default class SignupValidation{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    chcekValidation(){
        let errors = [];
        //email validaiton
        if(!Validations.checkEmail(this.email)){
            errors['email'] =" Invalid Email";
        }

        //password validaiton
        if(!Validations.minLenth(this.password, 6)){
            errors['password'] =" Password should be six charecter";
        }
        return errors;
    }
}