import { Navigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'

export const RequireAuth = ({ children }) => {

    const { user } = UserAuth();

    console.log(user);

    return user ? children : <Navigate to='/login' replace />
}