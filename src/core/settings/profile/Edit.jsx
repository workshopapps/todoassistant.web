import React from "react";
import './Settings.scss'
import { Link } from "react-router-dom";
import arrowLeft from "../../../assets/arrow-left-cj.svg"


const Edit = () => {
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
                            <p className="title">Edit profile</p>
                            <div className="head">
                                <div className="head-1">
                                    <div className="user-initial">
                                        <p className="init">J</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-form">
                                <div className="form-field">
                                    <label htmlFor="FullName">Full name</label>
                                    <input type="text" id="FullName" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="Email">Email address</label>
                                    <input type="text" id="Email" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone">Phone number</label>
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

export default Edit