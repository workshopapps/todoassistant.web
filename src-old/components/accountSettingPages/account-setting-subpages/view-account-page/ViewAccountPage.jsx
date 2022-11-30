import React from 'react'
import { Link } from 'react-router-dom'
import './ViewAccountPage.css'

function ViewAccountPage() {
  return (
    <div className='view_account_page'>
      <div className="personal_info_title">
            <h2>Personal Information</h2>
            <Link to='/settings/profile/edit'>Edit details</Link>
        </div>
        <div className="personal_info_content">
            <div className="double_input">
                <div className="single_input">
                    <label>Full Name
                    </label>
                        <p>Joseph Anderson</p>
                </div>
                <div className="single_input">
                    <label>Email Address
                    </label>
                        <p>Josephanderson@workmail.com</p>
                </div>
            </div>
            <div className="double_input">
                <div className="single_input">
                    <label>Phone Number
                    </label>
                        <p>+234 813 666 7878</p>
                </div>
                <div className="single_input">
                    <label>Password
                    </label>
                        <p>Enter New Password</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAccountPage