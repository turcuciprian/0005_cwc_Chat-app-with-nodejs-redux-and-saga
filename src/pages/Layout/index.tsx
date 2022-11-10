import { Link, Outlet } from 'react-router-dom'
import { pathLocations } from '../../routes/path';
import './style.css'

export default function Layout() {
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li>
                        <Link to={pathLocations.layout}>Home</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.courses}>Courses</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.NoMatch}>Nothing Here</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.publicPage}>Public page</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.counterPage}>Counter page</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.protected}>Protected page</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.loginPage}>Login</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}