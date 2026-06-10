import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <h2>Shah</h2>

            <nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;