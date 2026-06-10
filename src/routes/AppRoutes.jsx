import { Routes, Route } from "react-router-dom";

import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;
