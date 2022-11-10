import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../routes/auth';
import { pathLocations } from '../../routes/path';
import { useDispatch } from 'react-redux'
import './style.css'
import { setUser } from '../../store/slices/userSlice';
import { sagaSetUserAction } from '../../saga/actions/user';

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    const dispatch = useDispatch();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;
        dispatch(sagaSetUserAction(username,navigate))
        auth.signin(username, () => {
            navigate(pathLocations.protected, { replace: true });
        });
    }

    return (
        <div>
            <h2>Login Page</h2>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}