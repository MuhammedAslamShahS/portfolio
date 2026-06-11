import { Routes, Route } from "react-router-dom";

import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Experience from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Home from "../Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
