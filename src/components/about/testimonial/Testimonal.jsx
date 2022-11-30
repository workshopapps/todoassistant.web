import Carousel from "../../carousel/Carousel";
import styles from "./Testimonal.module.scss";
import TestimonialCard from "./testimonial-card/TestimonialCard";

const Testimonal = () => {
    // carousel testimonial
    // const testimonial = [
    //   {
    //     letter: 'D',
    //     name: 'David mark',
    //     desc: 'Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks',
    //     color: '#714DD9'
    //   },
    //   {
    //     letter: 'A',
    //     name: 'Adorable Grace',
    //     desc: ' Working with this team has been amazing, I’m happy witjh the progress we made building aomething individuals are happy using. Well donr team.',
    //     color: '#FDA758'
    //   },
    //   {
    //     letter: 'R',
    //     name: 'Ruth Davidson',
    //     desc: 'Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks',
    //     color: '#FDA758'
    //   },
    //   {
    //     letter: 'E',
    //     name: 'Esther George',
    //     desc: 'I must commened the efforts use to build this great app. Well done guys',
    //     color: '#714DD9'
    //   }
    // ]
  return (
    <section className={styles.section}>
      <div className={styles.sayBox}>
        <h2>See testimonials of others</h2>
        <div className={styles.gridBox}>
          <TestimonialCard
            id={0}
            name={`David mark`}
            comment={`Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks.`}
          />
          <TestimonialCard
            id={3}
            name={`Adorable Grace`}
            comment={`Working with this team has been amazing, I’m happy witjh the progress we made building aomething individuals are happy using. Well donr team.`}
          />
          <TestimonialCard
            id={1}
            name={`Ruth Davidson`}
            comment={`Thia has been the app I would say i needed . I love the interface and how easy it is for me to access the features provided. Good job guys I will highly recommend.`}
          />
          <TestimonialCard
            id={2}
            name={`Esther George`}
            comment={`I must commened the efforts use to build this great app. Well done guys.`}
          />
          <Carousel>
           
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
