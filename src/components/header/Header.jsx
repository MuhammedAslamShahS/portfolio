import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h2>Shah</h2>

            <nav>
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