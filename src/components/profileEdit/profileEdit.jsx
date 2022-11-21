import { useState } from "react";
import "./profileEdit.scss";
// import "./profileEdit.css";
import Window10 from "../../assets/Vector.png";
import NoImage from "../../assets/no-image-icon.jpg"
import UploadIcon from "../../assets/icons/upload-icon.png";

const JaybeeTodo = () => {
    const [file, setFile] = useState("");


  return (
    
      <div className="profile-edit-home">
        <div className="profile-container ">
          <h3 className="">My Profile</h3>
          <div className="profile">
            <div className="edit-avatar">
                  <img className="profile-icon" src={file ? URL.createObjectURL(file) : NoImage} alt="" />
              <form action="">
                <label htmlFor="file"><img className="upload-icon" src={UploadIcon} alt="" /></label>
                <input type="file" id="file" onChange={ e => setFile(e.target.files[0])} style={{display: "none"}} />
              </form>
            </div>
      
            <div className="profile-text">
              <p className="username">Joseph Anderson</p>
              <p>You are using Ticked for free</p>
            </div>
          </div>
          <div className="profile-content">
            <h1 className=" profle-content-header t">Personal Information</h1>
            <div className="profile-form ">
              <div className="single-form">
                <label htmlFor="" className="">
                  Full Name
                </label>
                <input className="" type="text" placeholder="Joseph Andersen" />
              </div>
              <div className="single-form">
                <label htmlFor="" className="">
                  Email Address
                </label>
                <input
                  className=""
                  type="email"
                  placeholder="Josephanderson@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="profile-form ">
              <div className="single-form">
                <label htmlFor="" className="">
                  Password
                </label>
                <input
                  className=""
                  type="password"
                  placeholder="Enter New Password"
                  required
                />
              </div>
              <div className="single-form">
                <label htmlFor="" className="">
                  Confirm Password
                </label>
                <input className="" type="password"  placeholder="confirm password" required />
              </div>
            </div>
            <div className="profile-form ">
              <div className="single-form">
                <label htmlFor="" className="">
                  Phone Number
                </label>
                <input className="" type="text" placeholder="+2348055667788" required />
              </div>
            </div>
      
            <button  className=" form-button ">Save changes</button>
            <div className="profile-form">
              <div className="manage-account">
                <label htmlFor="" className="">
                  Manage Account
                </label>
                <div className="check-box flex gap-2 items-center">
                  <input className=" " type="checkbox" />{" "}
                  <span>Receive an email when you sign in</span>
                </div>
              </div>
            </div>
            <div className="edit-device">
              <div>
                <div className="edit-footer">
                  <div className="edit-footer-top">
                    <img className="" src={Window10} alt="" style={{backgroundColor: "white"}} />
                    <div className="window-text">
                      <p>iOS 10</p>
                      <p>
                        Safari Browser, Today 09:59, 129.205.124.143, Lagos
                        Nigeria
                      </p>
                    </div>
                  </div>
                  <p className="edit-footer-btn ">
                    This <span>device</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

  );
};

export default JaybeeTodo;
