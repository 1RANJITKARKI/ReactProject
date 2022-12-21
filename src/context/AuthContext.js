import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE={
    user:{
        
        _id:"6399c3194ffe0fb48443e2b7",
        "profilePicture": "",
        "coverPicture": "",
        "followers": [],
        "followings": [],
        "isAdmin": false,
        "username": "Test",
        "email": "test@gmail.com",
        "password": "$2b$10$K6V3N9FGpaK4axEV.d37du6A7qQCvDqaZT3yWM5SdWQHRT4z/6H5m",
        "createdAt": {
          "$date": {
            "$numberLong": "1671021337624"
          }
        },
        "updatedAt": {
          "$date": {
            "$numberLong": "1671021337624"
          }
        },
        "__v": 0
      },
    isFetching: false,
    error: false
};

export const AuthContext= createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state, dispatch]= useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider
        value={{
            user: state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {children}

        </AuthContext.Provider>
    )
}