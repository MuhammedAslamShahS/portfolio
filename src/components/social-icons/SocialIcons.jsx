import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.css";
const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/MuhammedAslamShahS" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/muhammed-aslam-shah-s-365478271/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://x.com/b_had_u_shah" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a href="https://www.instagram.com/muhammedaslamshah/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
};

export default SocialIcons;
