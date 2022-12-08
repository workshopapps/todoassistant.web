import contactStyles from "./ContactForm.module.scss";
import { useState } from "react";
const ContactForm = () => {
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [report, setReport] = useState( "Do you have any question? Inquiry? Request? Please fill out this form" );
  
/*
  const handleSubmit = e => {
    e.preventDefault();
    if (phone && email && message) {
      setTimeout(() => {
        //setReport("Message Received from Ticked");
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
  */
  return (
    <section className={contactStyles.page}>
      <div className={contactStyles.top}>
        <h2 className={contactStyles.mainHeading}>Send us a message</h2>
        <p className={contactStyles.firstPara}>
            "Do you have any question? Inquiry? Request? Please fill out this form"
        </p>
      </div>

      <form className={contactStyles.formContainer}  action="https://formsubmit.co/getticked@gmail.com" method="POST">
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
            name="email"
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
            name="phone number"
            className={contactStyles.contactFormInput}
            value={phone}
            onChange={e => setphone(e.target.value)}
          />
        </div>

        <div>
          <label className={contactStyles.contactFormLabel}>
            Your Message{" "}
          </label>
              <textarea
                required
                type="text"
          className={contactStyles.contactFormTextarea}
                name="message"
value={message} onChange={(e)=> setMessage(e.target.value)}>
</textarea>
        </div>

        <button type="submit" className={`${contactStyles.buttom} hover`}>
          Submit Message
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
