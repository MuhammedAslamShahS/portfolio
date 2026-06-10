import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./SocialIcons.css";
const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://x.com/yourusername" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
};

export default SocialIcons;
