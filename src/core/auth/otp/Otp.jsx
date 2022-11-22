import styles from './OTPSection.module.scss'
import React,  { useState }  from 'react'
import ticked from '../../../assets/home/tick.png'


function Otp() {
  const [value, setValue] = useState("");
    const [timer, setTimer] = useState(null)
    const [bgColor, changeBgColor] = useState(false)
    const changeBg = () => {
        changeBgColor(!bgColor)
    }
    const handleOnChange = e => {
        setValue(e.target.value)
        clearTimeout(timer)
        const newTimer = setTimeout(() => {
          changeBg()
        }, 1500)
        setTimer(newTimer)
      }
  return (
    <div className={styles.App}>
       <div className={styles.logobar}>
        <img src={ticked} alt='ticked logo' className={styles.img}></img>
        <p className={styles.p}>Ticked</p>
    </div>
    <section className={styles.otpSection}>
        <div className={styles.otpText}>
            <p>OTP</p>
            <span>
            Enter the OTP that was sent to your email address to reset password.
            </span>
        </div>
        <div className={styles.otpDigit}>
            <input value={value} type='number' onChange={handleOnChange} className={styles.inputDigit}></input>
            <input value={value} type='number' onChange={handleOnChange}  className={styles.inputDigit}></input>
            <input value={value} type='number' onChange={handleOnChange}  className={styles.inputDigit}></input>
            <input value={value} type='number' onChange={handleOnChange}  className={styles.inputDigit}></input>
        </div>
        <button className={styles.button} type='submit' style={{backgroundColor: bgColor ? '#714dd9':'#D3D0D9'}}>continue</button>
    </section>
    </div>
  );
}
export default Otp;
