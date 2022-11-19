import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import mac from "../../../assets/macbook.svg"
import styles from './signup.module.scss'
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

const Signup = () => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [phoneNumber, setPhoneNumber] = useState ("");
    const [password, setPassword] = useState ("");
    const [isChecked, setIsChecked] = useState (false);
    const [passwordShown, setPasswordShown] = useState (false);
    const [error, setError] = useState (false);
   

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
          e.preventDefault();
          if (name.length==0 || email.length==0 || phoneNumber.length==0 || password.length==0){
            setError(true);
          }
          
          
      }

      const togglePassword = () =>{
        setPasswordShown(!passwordShown);
      };

      

      /*Later, if you want to, you add/use the default validation by making the input fields and textarea "required". */


  return (
    <div className={styles.signupContainer}>

        <div className={styles.signupImg}>
            <img src={mac} alt="macbook" />
        </div>

        <div className={styles.signupRight}>
            <h2 className={styles.createAccountText}>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                            
                            <div className={styles.eachContainer}>
                                <label htmlFor="name" className={styles.describer}>First & Last Name</label>
                                <input
                                id="name"
                                type="text"                           
                                placeholder="Enter name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                />
                                {error && name.length<=0?
                                <div className={styles.inputFieldErrorText}>Name does not match!</div>:""}
                            </div>
                        

                        <div className={styles.eachContainer}>
                            <label htmlFor="email" className={styles.describer}>Email Address</label>
                                <input
                                id="email"
                                className="emailInput"
                                type="email"                           
                                placeholder="Enter email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && email.length<=0?
                                <div className={styles.inputFieldErrorText}>Email does not match!</div>:""}
                        </div>
                        
                        <div className={styles.eachContainer}>
                            <label htmlFor="phoneNumber" className={styles.describer}>Phone Number</label>
                                <input
                                id="phoneNumber"
                                className="emailInput"
                                type="number"                           
                                placeholder="Enter phone"
                                value={phoneNumber}
                                required
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {error && phoneNumber.length<=0?
                                <div className={styles.inputFieldErrorText}>Phone number does not match!</div>:""}
                        </div>

                        
                        <div className={styles.eachContainer}>
                                <label htmlFor="password" className={styles.describer}>Password</label>
                                <input
                                id="password"
                                type={passwordShown ? "text" : "password"}                           
                                placeholder="Enter password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <AiOutlineEye onClick={togglePassword} className={passwordShown ? styles.hideEye : styles.showEye} /> 
                                <AiOutlineEyeInvisible onClick={togglePassword} className={passwordShown ? styles.showEye : styles.hideEye}/>
                                {error && password.length<=0?
                                <div className={styles.inputFieldErrorText}>Password does not match!</div>:""}
                            </div>
                        
                        <div className={styles.permission}>
                            <label htmlFor="checkbox"></label>
                                <input
                                id="checkbox"
                                name="checkbox"
                                type="checkbox"                           
                                checked={isChecked}
                                onChange={handleOnChange}
                                />
                                <span className={styles.permissionText}>By signing up, you agree to the <Link to="/policy" style={{textDecoration: "none"}}>Terms of service and Privacy Policy</Link></span>
                        </div>

                        {(name && email && phoneNumber && password && isChecked) && <button id="btn__submit" className={styles.button}>Sign Up</button>}
                        {(!name || !email || !phoneNumber || !password || !isChecked) && <button id="btn__submit" className={styles.buttonDisabled}  disabled>Sign Up</button>}


                    </form>
                    <p className={styles.toLogin}>Already have an account?, <Link to="/login" style={{textDecoration: "none", marginLeft:"0.3rem", fontWeight:"700"}}>Sign In</Link></p>
                </div>
        </div>
    )
}

export default Signup
