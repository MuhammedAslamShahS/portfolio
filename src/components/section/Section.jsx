import mainImg from "../../assets/main.png";
import SocialIcons from "../social-icons/SocialIcons";
import "./Section.css";
import bgVideo from "../../assets/bgvideo.mp4";
import HireMeButton from "../HireMeButton/HireMeButton";

const Section = () => {
    return (
        <>
            <section className="home">
                <video className="bg-video" autoPlay loop muted playsInline src={bgVideo} />

                <div className="home-img">
                    <img className="image" src={mainImg} alt="profile" />
                </div>

                <div className="home-contents">
                    <h1 className="hi-and-name">
                        Hi, it's <span>Muhammed Aslam Shah S</span>
                    </h1>

                    <h3 className="typing-text">
                        I'm a <span>Web Developer</span>
                    </h3>

                    <p className="p-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odit sed. Nemo qui ipsam ipsum
                        numquam dolorem ea saepe fugit.
                    </p>
                    <HireMeButton />

                    <div className="social-icons">
                        <SocialIcons />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section;
