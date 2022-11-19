import { QandA } from "./static";
import { contact } from "./static";
import plus from "../../assets/add.svg";
import minus from "../../assets/minus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.scss";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

const FAQ = () => {
  const [active, setActive] = useState(-1);

  const Toggle = (index) => {
    if (index === active) {
      setActive(-1);
      return;
    }
    setActive(index);
  };

  return (
    <div>
      <Header />
      <header className="top">
        <div className="ls container_2">
          <h2 className="header-text">{contact.header}</h2>
          <span className="sub-text">{contact.sub_text}</span>
        </div>
      </header>
      <div className="Topp ">
        <div className="faq container ">
          {QandA.map((qA, key) => {
            return (
              <div key={key} className="mapped" onClick={() => Toggle(key)}>
                <div className="question-toggle">
                  <div className="question">{qA.question}</div>
                  {active === key ? (
                    <img src={minus} alt="" className="icon" />
                  ) : (
                    <img src={plus} alt="" className="icon" />
                  )}
                </div>
                <span
                  className={`sub  ${active === key ? "active" : "inactive"}`}
                >
                  {qA.answer}
                </span>
              </div>
            );
          })}
        </div>
        <div className="text container ">
          <p className="contact">{contact.contact}</p>
          <Link to="/contact">
            <p className="contact-sub">{contact.link}</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
