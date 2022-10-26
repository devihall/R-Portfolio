import React from "react";
import "./Contact.css";

const sendEmail = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <section className="contact-form" id="contact">
      
      <div className="c-text">
        <span>Get in Touch</span>
        <h1>Contact me</h1>
      </div>
<div className="blur s-blur1"> </div>
      <div className="contact-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="sender"
            placeholder="Name"
          />

          <input
            type="email"
            name="user_email"
            className="sender"
            placeholder="Email"
          />
          <textarea name="message" className="sender" placeholder="Message" />
          <button
            type="submit"
            value="Send"
            className="button"
            onSubmit={sendEmail}
          >
            Submit
          </button>
          <div className="blur c-blur1"></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
