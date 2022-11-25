import React from 'react'
import './ProfilePageHeader.css'

function ProfilePageHeader() {
  return (
    <div className="profile_page_header">
            <h1>My Profile</h1>
            <div className="profilepg_container">
                <div className='prof_pic_container'>
                    <h1>J</h1>
                    <img src="" alt="" />
                </div>
                <div>
                    <h2>Joseph Anderson</h2>
                    <p>You are using Ticked for free</p>
                </div>
            </div>
        </div>
  )
}

export default ProfilePageHeader