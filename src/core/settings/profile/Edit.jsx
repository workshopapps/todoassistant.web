import React from "react";
import './Settings.scss'
import { Link } from "react-router-dom";
import arrowLeft from "../../../assets/arrow-left-cj.svg"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import axios from "axios";


const Edit = () => {
    const { user } = useContext(AuthContext)
    const { first_name, user_id } = user

    useEffect(() => {
        axios.get(`api/v1/va/${user_id}').then((res)=> console.log(res)`)
    }, [])


    const defaultForm = {
        first_Name: '',
        last_name: "",
        email: "",
        phone: ""
    }
    const [form, setForm] = useState(defaultForm)
    const { first_Name, last_name, email, phone } = form

    const onChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    let FName = first_name
    let initial = FName.charAt(0).toUpperCase()
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
                                        <p className="init">{initial}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-form">
                                <div className="form-field">
                                    <label htmlFor="first_Name" className="lab">First Name</label>
                                    <input type="text" id="first_Name" required name="first_Name" value={first_Name} onChange={onChange} />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="last_name" className="lab">Last Name</label>
                                    <input type="text" id="last_name" required name="last_name" value={last_name} onChange={onChange} />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email" className="lab">Email address</label>
                                    <input type="email" id="email" required name="email" value={email} onChange={onChange} />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone" className="lab">Phone number</label>
                                    <input type="password" id="phone" required name="phone" value={phone} onChange={onChange} />
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