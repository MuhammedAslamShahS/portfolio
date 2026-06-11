import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h2>
                Sh<span>ah</span>
            </h2>

            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <div className="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

export default Header;