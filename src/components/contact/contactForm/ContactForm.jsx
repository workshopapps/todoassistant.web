import contactStyles from "./ContactForm.module.scss";
import { useState } from "react";
const ContactForm = () => {
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [report, setReport] = useState(
    "Do you have any question? Inquiry? Request? Please fill out this form"
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (phone && email && message) {
      setTimeout(() => {
        setReport("Message Received from Ticked");
        alert("Message Received");
      }, 1000);
    } else {
      setTimeout(() => {
        alert("Please Enter All Fields");
      }, 1000);
    }

    setMessage("");
    setEmail("");
    setphone("");
  };
  return (
    <section className={contactStyles.page}>
      <div className={contactStyles.top}>
        <h2 className={contactStyles.mainHeading}>Send us a message</h2>
        <p className={contactStyles.firstPara}>{report}</p>
      </div>

      <form className={contactStyles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label className={contactStyles.contactFormLabel}>
            Email Address{" "}
          </label>

          <input
            required
            type="text"
            placeholder="yourname@email.com"
            className={contactStyles.contactFormInput}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className={contactStyles.contactFormLabel}>
            Phone Number{" "}
          </label>
          <input
            required
            type="number"
            placeholder="+2348123456789"
            className={contactStyles.contactFormInput}
            value={phone}
            onChange={e => setphone(e.target.value)}
          />
        </div>

        <div>
          <label className={contactStyles.contactFormLabel}>
            Your Message{" "}
          </label>
          <input
            required
            type="text"
            className={contactStyles.contactFormTextarea}
            placeholder="Type in your message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className={`${contactStyles.buttom} hover`}>
          Submit Message
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
