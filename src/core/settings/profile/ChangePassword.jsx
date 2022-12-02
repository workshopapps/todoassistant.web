import React from "react";
import './Settings.scss'
import { Link } from "react-router-dom";
import arrowLeft from "../../../assets/arrow-left-cj.svg"

const ChangePassword = () => {
    return (
        <div>
            <div className="settings">
                <div className="profile conman">
                    <div className="profile-top">
                        <Link to="../profile">
                            <img src={arrowLeft} alt="arrow" />
                        </Link>
                    </div>
                    <div className="profile-bottom">
                        <form className="form">
                            <p className="title">Change password</p>
                            <div className="form-form">
                                <div className="form-field">
                                    <label htmlFor="FullName">Enter current password</label>
                                    <input type="text" id="FullName" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="Email">Enter new password</label>
                                    <input type="text" id="Email" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone">Confirm new password</label>
                                    <input type="text" id="phone" />
                                </div>
                            </div>

                            <button className="btn-btn-btn">
                                Save changes
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword