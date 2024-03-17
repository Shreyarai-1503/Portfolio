import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "../../components/Popup";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j0bz5er",
        "template_v0wmy1r",
        form.current,
        "nbROO-CKfFM8bGNoH"
      )
      .then((result) => {
        console.log(result.text);
        setPopup(true);
      });
  };

  return (
    <section className="contact section">
      <h2 className="sectionTitle">
        Get In <span>Touch</span>
      </h2>

      <div className="contactContainer container grid">
        <div className="contactData">
          <h3 className="contactTitle">Hey There!</h3>

          <p className="contactDesc">
            Please feel free to get in touch with me. I am always open to
            discussing new projects, ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contactInfo">
            <div className="infoItem">
              <div className="infoIcon">
                <FaEnvelopeOpen />
              </div>
              <div>
                <span className="infoTitle">Email Me</span> <br />
                <span className="infoDesc">shreyarai1503@gmail.com</span>
              </div>
            </div>

            <div className="infoItem">
              <div className="infoIcon">
                <FaPhoneSquareAlt />
              </div>
              <div>
                <span className="infoTitle">Call Me</span>
                <br />
                <span className="infoDesc">+91 7387372955</span>
              </div>
            </div>
          </div>

          <div className="contactSocials">
            <a
              href="https://www.linkedin.com/in/shreya-rai5"
              className="contactLinks"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Shreyarai-1503"
              className="contactLinks"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="formInput-group">
            <div className="formInput-div">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="formControl"
              />
            </div>

            <div className="formInput-div">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="formControl"
              />
            </div>

            <div className="formInput-div">
              <input
                type="text"
                placeholder="Subject"
                name="sub"
                className="formControl"
              />
            </div>
          </div>

          <div className="formInput-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="formControl textarea"
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="buttonIcon contactButton-icon">
              <FiSend />
            </span>
          </button>
        </form>
        {popup && <Popup trigger={setPopup} />}
      </div>
    </section>
  );
};

export default Contact;
