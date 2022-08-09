import React from "react";
import "../css/header.css"
import {Link} from 'react-router-dom'
const Header = (props) => {
return(<nav className="header-container">
    <Link to = "/" className="header-links" >
        <h3 id="header-text">{props.heading}</h3>
    </Link>
        <ul className="nav-links">
            <Link to = "/about" className="links">
            <li>
                About Me
            </li>
            </Link>
            <Link to = "/past-experiences" className="links">
            <li>
                Past Experiences
            </li>
            </Link>
            <Link to = "/know-me-better" className="links">
            <li>
                Know me better
            </li>
            </Link>
        </ul>
    
</nav>)
}
export default Header;