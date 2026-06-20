import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">

        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or feedback? Send us a message.
        </p>

        <form className="contact-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;