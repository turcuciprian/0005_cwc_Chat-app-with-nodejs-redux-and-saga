import { Link } from 'react-router-dom'
import { pathLocations } from '../../routes/path';
import './style.css'

export default function CoursesIndex() {
    return (
        <div>
            <p>Please choose a course:</p>

            <nav>
                <ul>
                    <li>
                        <Link to={pathLocations.reactFundamentalsId}>React Fundamentals</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.advancedReactId}>Advanced React</Link>
                    </li>
                    <li>
                        <Link to={pathLocations.reactRouter}>React Router</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}