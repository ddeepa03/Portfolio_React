import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Me</span>
        </h2>
        <h4>Let's work Together</h4>
        <p>
          I’m always open to new opportunities, collaborations, or just a friendly chat.
          Whether you have a question, a project idea, or want to work together,
          feel free to reach out. I’ll get back to you as soon as possible!
        </p>

        {/* Contact List */}
        <div className="contact-list">
          <li>
            <FaEnvelope size={20} className="icon" /> deepadhandapani2001@gmail.com
          </li>
          <li>
            <FaPhone size={20} className="icon" /> 9363285596
          </li>
        </div>

        {/* Social Icons */}
        <div className="home-sci">
          <a
            href="https://www.linkedin.com/in/deepa-d-74326229b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} className="icon" />
          </a>
          <a
            href="https://github.com/ddeepa03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} className="icon" />
          </a>
          <a
            href="mailto:deepadhandapani2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={28} className="icon" />
          </a>
        </div>
      </div>

  
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Subject" required />
          <textarea
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <input type="submit" value="Submit" className="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
