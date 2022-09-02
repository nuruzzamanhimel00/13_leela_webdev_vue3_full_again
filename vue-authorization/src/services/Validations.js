export default class Validations{
    static checkEmail(email){
        if (
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                email,
                )
            )
        {
          return (true)
        }
         
          return (false)
    }
    
    static minLenth(name, minLenth){
        if(name.length < minLenth){
            return false;
        }
        return true;
    }

    static getErrorMessageFromCode(errorMsg){
        switch (errorMsg) {
            case "The given data was invalid.":
            return "Email Already Taken";
            
        }
    }
}