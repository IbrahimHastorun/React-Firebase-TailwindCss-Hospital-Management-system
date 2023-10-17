import { useEffect , useReducer , createContext} from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const INITIAL_STATE = {
    currentUser : null,
    authIsReady : false
};

const authReducer = (state , action) => {
    switch (action.type) {
        case "LOGIN" : return {...state , currentUser : action.payload};

        case "LOGOUT" : return {...state , currentUser : null};

        case "AUTH_IS_READY" : return {...state , currentUser : action.payload , authIsReady : true}
    
        default : return state;
    }
};

const AuthProvider = ({children}) => {
    const [state , dispatch] = useReducer(authReducer , INITIAL_STATE);

    useEffect(() => {
        const getCurrentUser = onAuthStateChanged(auth , (user) => {
            dispatch({type : "AUTH_IS_READY" , payload : user });
            getCurrentUser();
        })
    }, []);

    return (
        <AuthContext.Provider value={{...state , dispatch}}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;