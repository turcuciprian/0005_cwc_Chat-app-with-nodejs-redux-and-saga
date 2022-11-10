import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { pathLocations } from '../../routes/path';
import { clearUser, userState } from '../../store/slices/userSlice';
import './style.css'

export default function Layout() {
    const user = useSelector(userState).value
    const dispatch = useDispatch()
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li>
                        <Link to={pathLocations.layout}>Home</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.chatPage}>Chat page</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.loginPage}>{user ? 'Settings' : 'Login'}</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}