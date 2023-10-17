import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AuthRoute = ({ children }) => {
    const { currentUser } = useAuthContext();

    if (!currentUser) {
        
        return (
            <Navigate to="/auth" />
        );

    }

    return (
        <>{children}</>
    );
}

export default AuthRoute;