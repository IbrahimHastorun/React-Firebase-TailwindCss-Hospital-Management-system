import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";

export const useCurrentUser = () => {
    const [pending , setPending] = useState(false);
    
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const login = async (email , password) => {
        setPending(true);

        try {
            const response = await signInWithEmailAndPassword(auth , email , password);

            dispatch({type : "LOGIN" , payload : response.user});
            toast.success("Login Successful");
            setPending(false);
            navigate("/");
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-login-credentials":
                    toast.error("Email Address Or Password Is Incorrect");
                break;
            
                default:
                    setPending(false);
                break;
            }
            setPending(false);
        }
    };

    const logout = async () => {
        setPending(true);

        try {
            await signOut(auth);

            dispatch({type : "LOGOUT"});
            toast.success("Logout Successful");
            setPending(false);
        } catch (error) {
            toast.error(error.code);
            setPending(false);
        }
    };

    return {
        pending,
        login,
        logout
    };
};