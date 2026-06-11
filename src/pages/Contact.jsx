import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css"
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities? Feel free
          to get in touch.
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Let's Connect</h2>

            <div className="contact-item">
              <FaEnvelope />
              <span>muhammedaslamshahsofficial@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaPhone />
              <span>+91 9746739163</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Kerala, India</span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/MuhammedAslamShahS"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammed-aslam-shah-s-365478271/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Contact