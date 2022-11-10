import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../routes/auth';
import { pathLocations } from '../../routes/path';
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { clearUser, setUser, userState } from '../../store/slices/userSlice';
import { sagaSetUserAction } from '../../saga/actions/user';

export function LoginPage() {
    const user = useSelector(userState).value
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    const dispatch = useDispatch();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;
        dispatch(sagaSetUserAction(username, navigate))
    }

    return (
        <div>
            <h2>{!user ? 'Login Page' : 'Settings'}</h2>

            {user ? <><br /><button onClick={() => { dispatch(clearUser()) }}>Logout</button></> : <div>
                <p>You must log in to view the page at {from}</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        Username: <input name="username" type="text" />
                    </label>{" "}
                    <button type="submit">Login</button>
                </form>
            </div>}

        </div>
    );
}