import React from "react";
import "../css/header.css"
import {Link} from 'react-router-dom'
import data from '../assets/text-data/text.json'
const Header = ({heading}) => {
return(<nav className="header-container">
    <Link to = "/" className="header-links" >
        <h3 id="header-text">{heading}</h3>
    </Link>
        <ul className="nav-links">
            <Link to = "/about" className="links">
            <li>
                {data.link.aboutMe}
            </li>
            </Link>
            <Link to = "/past-experiences" className="links">
            <li>
            {data.link.past_experiences}
            </li>
            </Link>
            <Link to = "/know-me-better" className="links">
            <li>
                {data.link.know_me_better}
            </li>
            </Link>
        </ul>
    
</nav>)
}
export default Header;