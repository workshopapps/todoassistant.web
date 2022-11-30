import styles from "./Testimonal.module.scss";

const Testimonal = () => {
  return (
    <>
      <div className={styles.sayBox} >
        <p className={styles.saytitle}>See what others have to say</p>
        <div className={styles.gridbox}>
          <div className={styles.grid}>
            <div className={styles.hstack}>
              <div style={{background:'#714DD9'}} className={styles.round}>D</div>
              <p className={styles.hstacktext}>David mark</p>
            </div>
            <p className={styles.lefttext}>
              Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks
              </p>
          </div>
          <div className={styles.grid}>
          <div className={styles.hstack}>
              <div style={{background:'#FDA758'}} className={styles.round}>A</div>
              <p className={styles.hstacktext}>Adorable Grace</p>
            </div>
            <p className={styles.lefttext}>
              Working with this team has been amazing, I’m happy witjh the progress we made building aomething individuals are happy using. Well donr team. </p>
          </div>
          <div className={styles.grid}>
          <div className={styles.hstack}>
              <div style={{background:'#FDA758'}} className={styles.round}>R</div>
              <p className={styles.hstacktext}>Ruth Davidson</p>
            </div>
            <p className={styles.lefttext}>
              This has been the app I would say i needed . I love the interface and how easy it is for me to access the features provided. Good job guys I will highly recommend
            </p>
          </div>
          <div className={styles.grid}>
          <div className={styles.hstack}>
              <div style={{background:'#714DD9'}} className={styles.round}>E</div>
              <p className={styles.hstacktext}>Esther George</p>
            </div>
            <p className={styles.lefttext}>
             I must commened the efforts use to build this great app. Well done guys </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonal;
