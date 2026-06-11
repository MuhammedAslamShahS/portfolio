import ServicesCards from "../services-cards/ServicesCards";
import "./ServicesComponent.css";
const ServicesComponent = () => {
    return (
        <div className="services-section-main-container">
            <div className="services-container">
                <div className="circle-1">1</div>
                <div>
                    {" "}
                    <h1>My Services</h1>
                    <h3>digital solutions with precision, creativity and technology.</h3>
                    &nbsp;
                    <h2>Web Development</h2>
                    <p>Premium, fast, secure and SEO‑perfected websites built to global standards.</p>
                </div>
                <div className="circle-2">2</div>
            </div>
            <div className="services-card-section">
                <ServicesCards />
            </div>
        </div>
    );
};

export default ServicesComponent;
