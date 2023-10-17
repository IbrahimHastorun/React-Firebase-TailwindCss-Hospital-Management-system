import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NoAuthRoute = ({ children }) => {
    const { currentUser } = useAuthContext();

    if (currentUser) {
        
        return (
            <Navigate to="/" />
        );

    }

    return (
        <>{children}</>
    );
}

export default NoAuthRoute;