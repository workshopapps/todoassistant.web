import contactStyles from "./ContactForm.module.scss";
import * as Checkbox from "@radix-ui/react-checkbox";

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ContactForm = () => (
  <div className={contactStyles.page}>
    <section className={contactStyles.formSection}>
      <div className={contactStyles.top}>
        <h2 className={contactStyles.mainHeading}>Reach <span>Out</span></h2>
        <p className={contactStyles.firstPara}>
          Our lovely team will love to hear from you, we will respond
          within 12 hours
        </p>
        <p>
          Do you have any question? Inquiry? Request?{" "}
          <span className={contactStyles.emphasis}>
            Please fill out this form
          </span>
        </p>
      </div>
      <form>
        <div className={contactStyles.inputRow}>
          <div>
            <label>
              Your full name{" "}
              <input
                className={contactStyles.outline}
                required
                type="text"
                placeholder="Goodluck"
              />
            </label>
          </div>
          <div>
            <label>
              Email{" "}
              <input
                className={contactStyles.outline}
                required
                type="text"
                placeholder="gabrielmark@gmail.com"
              />
            </label>
          </div>
          <div className={contactStyles.spanCol2}>
            <label>
              Phone number{" "}
              <input
                className={contactStyles.outline}
                required
                type="text"
                placeholder="08123456789"
              />
            </label>
          </div>
        </div>
        <label>
          Your message{" "}
          <textarea
            className={contactStyles.outline1}
            required
            placeholder="Hi, I love your product so much, it really helped me stop procrastinating"
          ></textarea>
        </label>
        <div className={contactStyles.bottom}>
          <h3 className={contactStyles.subHeading}>
            How will you like to communicate with us?
          </h3>
          <div className={contactStyles.radioCollection}>
            <label>
              <Checkbox.Root
                className={contactStyles.checkboxRoot}
                value="phoneCall"
              >
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span>Phone call</span>
            </label>
            <label>
              <Checkbox.Root
                className={contactStyles.checkboxRoot}
                defaultChecked
                value="email"
              >
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span>Email</span>
            </label>
          </div>
          <button className="hover" type="submit">
            Submit Message
          </button>
        </div>
      </form>
    </section>
  </div>
);

export default ContactForm;
