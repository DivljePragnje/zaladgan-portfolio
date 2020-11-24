import React from "react";
import "./Contact.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const handleContact = () => {
    console.log();
  };
  return (
    <div className="contact-wrapper" id="contact-wrapper">
      <p>
        Wheather you're a prospective client, or simply a fan of my work, send
        me a note. I am working hard but will try and respond ASAP.
      </p>
      <button className="button" onClick={handleContact}>
        CONTACT ME
      </button>
      <div className="social-media">
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.pinterest.com">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
