// import style from "./Testimonal-module.scss";

const Testimonal = () => {
  /*testimonal section*/

  return (
    <>
      <h1 className="testimonal-title big-title">See testimonials of others</h1>

      <h1 className="testimonal-title small-title">Testimonals</h1>

      <section className="testimonal-container">
        <article className="testimonial-box">
          <p className="testimonal-content">
            Having the ticked app on my phone has made me manage my task well.
            I'm always up-to-date on my tasks
          </p>
          <div className="footer-content">
            <button className="btn1">D</button>
            <h2 className="footer-title"> David Mark</h2>
          </div>
        </article>

        <article className="testimonial-box">
          <p className="testimonal-content">
            Thia has been the app I would say i needed. I love the interface and
            how easy is forcme to access the features provided. Good job guys I
            will highly recommend
          </p>
          <div className="footer-content">
            <button className="btn2">R</button>
            <h2 className="footer-title">Ruth Davidson</h2>
          </div>
        </article>

        <article className="testimonial-box">
          <p className="testimonal-content">
            I must commend the efforts use to build this great app. Well done
            guys
          </p>

          <div className="footer-content">
            <button className="btn1">E</button>
            <h2 className="footer-title">Esther George</h2>
          </div>
        </article>

        <article className="testimonial-box">
          <p className="testimonal-content">
            Working with this team has been amazing. I'm happy with the progress
            we made building something individuals are happy using. Well done
            Team
          </p>
          <div className="footer-content">
            <button className="btn1">A</button>
            <h2 className="footer-title">Adorable Grace</h2>
          </div>
        </article>

        <article className="testimonial-box">
          <p className="testimonal-content">
            I love the Simplicity of the app. It's very easy to navigate. Well
            done Guys, great work
          </p>
          <div className="footer-content">
            <button className="btn2">G</button>
            <h2 className="footer-title">Goodluck Chris</h2>
          </div>
        </article>

        <article className="testimonial-box">
          <p className="testimonal-content">
            Great user Interface and experience i'm in love with the app guys.
          </p>
          <div className="footer-content">
            <button className="btn1">P</button>
            <h2 className="footer-title">Peter Jacob</h2>
          </div>
        </article>
      </section>
    </>
  );
};

export default Testimonal;
