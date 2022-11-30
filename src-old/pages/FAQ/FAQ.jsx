import { QandA } from "./static";
import { contact } from "./static";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.scss";
import Layout from "../../layout/Layout";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const FAQ = () => {
  const [active, setActive] = useState(-1);

  const Toggle = index => {
    if (index === active) {
      setActive(-1);
      return;
    }
    setActive(index);
  };

  return (
    <Layout>
      <header className="top">
        <div className="ls container_2">
          <h2 className="header-text">{contact.header}</h2>
          <span className="sub-text">{contact.sub_text}</span>
        </div>
      </header>
      <div className="Topp ">
        <div className="faq containerr ">
          {QandA.map((qA, key) => {
            return (
              <div key={key} className="mapped" onClick={() => Toggle(key)}>
                <div className="question-toggle">
                  <div className="question">{qA.question}</div>
                  {active === key ? (
                    <CiCircleMinus className="icon_faq" size={`2rem`} />
                  ) : (
                    <CiCirclePlus className="icon_faq" size={`2rem`} />
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
        <div className="text containerr ">
          <p className="contact">{contact.contact}</p>
          <Link to="/contact">
            <p className="contact-sub">{contact.link}</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
