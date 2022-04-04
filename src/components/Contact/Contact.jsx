import React from "react";
import {
  AiOutlineMail,
  AiFillMessage,
  AiOutlineWhatsApp
} from "react-icons/ai";

import ContactOption from "./ContactOption";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container">
        <div className="contact-options">
          <ContactOption
            Icon={AiOutlineMail}
            title="Email"
            description="mailto:adelimer5533@gmail.com"
          />
          <ContactOption
            Icon={AiFillMessage}
            title="Facebook"
            description="https://www.facebook.com/profile.php?id=100024038522495"
          />
          <ContactOption
            Icon={AiOutlineWhatsApp}
            title="WhatsApp"
            description="tel: +201146509692"
          />
        </div>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
