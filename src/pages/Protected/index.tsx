
import { useDispatch } from 'react-redux'
import './style.css'
import { clearUser } from '../../store/slices/userSlice';

export function ProtectedPage() {
    const dispatch = useDispatch();
    return <div>
        <h3>Protected. You are logged in</h3>
        <button onClick={() => {
            dispatch(clearUser())
        }}>Log Out</button>
    </div>;
}