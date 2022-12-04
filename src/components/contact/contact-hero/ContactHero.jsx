
import ContactForm from "../contactForm/ContactForm";
import style from "./ContactHero.module.scss";
import img from "../../../assets/Group 26086234.svg";

const ContactHero = () => {
  return (
    <section className={style.sectionGrid}>
      <div className={style.contactGrid}>
         <section className={style.img}>
        <img
          src ={img}
          alt="img"
        />
      </section>
      
         <section>
          <ContactForm/>
          </section>
      </div>
      </section>
  );
};

export default ContactHero;
