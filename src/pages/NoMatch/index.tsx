import { Link } from 'react-router-dom'
import { pathLocations } from '../../routes/path';
import './style.css'

export default function NoMatch() {
    return (
        <div>
            <h2>It looks like you're lost...</h2>
            <p>
                <Link to={pathLocations.layout}>Go to the home page</Link>
            </p>
        </div>
    );
}