
//
import style from "./ContactPages.module.scss";
import ContactHero from "../contact-hero/ContactHero";
//import ContactApp from "../contactApp/ContactApp";
const ContactPages = () =>{
  return (
    <section className={style.contactPages}>
    <ContactHero/>
    </section>
    )
}

export default ContactPages