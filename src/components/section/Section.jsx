import mainImg from "../../assets/main.png";
import SocialIcons from "../social-icons/SocialIcons";
import "./Section.css"
const Section = () => {
    return (
        <>
            <section className="home">
                <div className="home-img">
                    <img className="image" src={mainImg} alt="profile" />
                </div>

                <div className="home-contents">
                    <h1>
                        Hi, its <span>Muhammed Aslam Shah S</span>
                    </h1>
                    <h3 className="typing-text">
                        {" "}
                        I'm a <span></span>
                    </h3>
                    <p className="p-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odit sed. Nemo qui ipsam ipsum
                        numquam dolorem ea saepe fugit.
                    </p>
                    <div className="social-icons">
                      <SocialIcons/>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Section;
