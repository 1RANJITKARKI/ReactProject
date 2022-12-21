const AuthReducer= (state, action)=>{
   switch(action.type){
    case "LOGIN_START":
        return{
            user:null,
            isFetchig:true,
            error: false
        };
    
    case "LOGIN_SUCCESS":
        return{
            user: action.payload,
            isFetchig: false,
            error: false
        };


    case "LOGIN_FAILURE":
        return{
            user: null,
            isFetchig: false,
            error:action.payload
        }

        default:{
            return state;
        }
   } 
}

export default AuthReducer;