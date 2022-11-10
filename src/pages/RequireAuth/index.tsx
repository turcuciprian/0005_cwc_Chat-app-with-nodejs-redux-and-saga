import { Navigate, useLocation } from "react-router-dom";
import { pathLocations } from "../../routes/path";
import { userState } from "../../store/slices/userSlice";
import { useSelector } from 'react-redux'

export function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    const user = useSelector(userState).value

    if (!user) {
        return <Navigate to={pathLocations.loginPage} state={{ from: location }} replace />;
    }

    return children;
}