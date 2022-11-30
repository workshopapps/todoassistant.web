import styles from "./Testimonal.module.scss";

const Testimonal = () => {
  return (
    <>
     <div className={styles.testimonialContainer}>
      <div className={styles.box} >
          <p className={styles.title}>Mission Statement</p>
          <p className={styles.text}>To help users prioritize and stay in control of their workload</p>
      </div>
      <div className={styles.box} >
          <p className={styles.title}>Vision Statement</p>
          <p className={styles.text}>To free our users with the concerned associated with task management</p>
      </div>
      <div className={styles.box} >
          <p className={styles.title}>Our Core Values</p>
          <p className={styles.text}>Excellence<br/>
          Competence<br/>
          Time management
          </p>
      </div>
     
     </div>
      <div className={styles.sayBox} >
        <p className={styles.saytitle}>See what others have to say</p>
        <div className={styles.gridbox}>
           <div className={styles.grid}>
            <p className={styles.lefttext}>
              Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks
              </p>
            <div className={styles.hstack}>
              <div style={{background:'#714DD9'}} className={styles.round}>D</div>
              <p className={styles.hstacktext}>David mark</p>
            </div>

          </div>
          <div className={styles.grid}>
            <p className={styles.lefttext}>
              This has been the app I would say i needed . I love the interface and how easy it is for me to access the features provided. Good job guys I will highly recommend
            </p>
            <div className={styles.hstack}>
              <div style={{background:'#FDA758'}} className={styles.round}>R</div>
              <p className={styles.hstacktext}>Ruth Davidson</p>
            </div>
          </div>
           <div className={styles.grid}>
            <p className={styles.lefttext}>
             I must commened the efforts use to build this great app. Well done guys </p>
            <div className={styles.hstack}>
              <div style={{background:'#714DD9'}} className={styles.round}>E</div>
              <p className={styles.hstacktext}>Esther George</p>
            </div>

          </div>
           <div className={styles.grid}>
            <p className={styles.lefttext}>
              Working with this team has been amazing, I’m happy witjh the progress we made building aomething individuals are happy using. Well donr team. </p>
            <div className={styles.hstack}>
              <div style={{background:'#FDA758'}} className={styles.round}>A</div>
              <p className={styles.hstacktext}>Adorable Grace</p>
            </div>

          </div>
           <div className={styles.grid}>
            <p className={styles.lefttext}>I love the simplicity of the app , it’s very easy to navigate . Well donr guys , great work</p>
            <div className={styles.hstack}>
              <div style={{background:'#714DD9'}} className={styles.round}>G</div>
              <p className={styles.hstacktext}>Goodluck Chris</p>
            </div>

          </div>
           <div className={styles.grid}>
            <p className={styles.lefttext}>Great user interface and experience I’m in love with the app guys.
                   </p>
            <div className={styles.hstack}>
              <div style={{background:'#FDA758'}} className={styles.round}>P</div>
              <p className={styles.hstacktext}>Pete Jacob</p>
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default Testimonal;
