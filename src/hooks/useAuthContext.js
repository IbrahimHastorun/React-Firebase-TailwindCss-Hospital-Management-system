import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext'e erişilemedi");
    }

    return authContext;
};