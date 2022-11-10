import { Link } from 'react-router-dom';
import { pathLocations } from '../../routes/path';
import './style.css'

export default function Home() {
    return (
        <div>
            <h1>Chat App</h1>
            <p>The chat application example, with Redux, Saga and Channels</p>
            <p>You need to <Link to={pathLocations.loginPage}>Log In</Link> to use the chat</p>
        </div>
    );
}