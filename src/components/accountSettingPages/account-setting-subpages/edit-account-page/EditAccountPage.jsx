import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import './EditAccountPage.css'

function EditAccountPage() {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState(false);
    
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePassword1 = () => {
      setPasswordShown(!passwordShown);
    };
  const togglePassword2 = () => {
      setPasswordShown2(!passwordShown2);
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (
            password1 !== password2 ||
            password1.length == 0 ||
            fullName.length == 0 ||
            phoneNumber.length == 0
            ) {
                setError(true);
                console.log(error);
            }
    }

  return (
    <div className="edit_account_page">
      <div className="personal_info_edit">
        <div className="personal_info_title">
            <h2>Personal Information</h2>
        </div>
        <div className="personal_info_content">
            <form onSubmit={handleSubmit}>
          <div className="double_input">
              <div className="single_input">
                  <label>Full Name
                      <input type="text" required name="full_name" onChange={e => {setFullName(e.target.value)}} placeholder='Joseph Anderson' id="" />
                  </label>
              </div>
              <div className="single_input">
                  <label>Email Address
                      <input type="email" required name="email" disabled='true' placeholder='josephanderson@workmail.com' id="" />
                  </label>
              </div>
          </div>

          <div className="double_input">
              <div className="single_input">
                  <label>Phone Number
                      <input type="number" required  name="phone" onChange={e => {setPhoneNumber(e.target.value)}}placeholder='+234 813 666 7878' id="" />
                  </label>
              </div>
              <div className="single_input">
                  <label>Password
                      <input type={passwordShown ? "text" : "password"} required name="" onChange={e => {setPassword1(e.target.value)}} placeholder='Password' id=""/>
                      <AiOutlineEye
                          onClick={togglePassword1}
                          className={passwordShown ? 'hideEye' : 'showEye'}
                          />
                      <AiOutlineEyeInvisible
                          onClick={togglePassword1}
                          className={passwordShown ? 'showEye' : 'hideEye'}
                          />
                  </label>
              </div>
          </div>

          <div className="double_input">
              <div className="single_input">
                  <label>Confirm Password
                      <input type={passwordShown2 ? "text" : "password"} required name="" onChange={e => {setPassword2(e.target.value)}} placeholder='Password' id="" />
                      <AiOutlineEye
                          onClick={togglePassword2}
                          className={passwordShown2 ? 'hideEye2' : 'showEye2'}
                          />
                      <AiOutlineEyeInvisible
                          onClick={togglePassword2}
                          className={passwordShown2 ? 'showEye2' : 'hideEye2'}
                          />
                  </label>
              </div>
              <div className="single_input">
              </div>
          </div>
          <button type='submit' className='pref_btn'>Save Changes</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditAccountPage