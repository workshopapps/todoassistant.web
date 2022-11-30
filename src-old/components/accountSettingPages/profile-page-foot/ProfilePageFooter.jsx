import React from 'react'
import './ProfilePageFooter.css'
import windowsimg from '../../../assets/dashboard/windowspc.jpg'

function ProfilePageFooter() {
  return (
    <div className="profile_page_footer">
            <h1>Manage Account</h1>
            <div className='check_input'>
                <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                </label>
                <p className='color'>Receive an email when you sign in</p>
            </div>
            <div className="footer_all_devices">
                <div className="footer_each_device">
                    <div className="device">
                        <div className="device_icon">
                            <img src={windowsimg} alt="" />
                        </div>
                        <div className="device_info">
                            <h3>Windows 10</h3>
                            <p>Chrome Browser, At present 129.205.124.143, Lagos Nigeria</p>
                        </div>
                    </div>
                    <div className="device_status">
                        <p>This Device</p>
                    </div>   
                </div>
            </div>
        </div>
  )
}

export default ProfilePageFooter