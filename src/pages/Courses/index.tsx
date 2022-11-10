import { Outlet } from 'react-router-dom'
import './style.css'

export default function Courses() {
    return (
        <div>
            <h2>Courses</h2>
            <Outlet />
        </div>
    );
}