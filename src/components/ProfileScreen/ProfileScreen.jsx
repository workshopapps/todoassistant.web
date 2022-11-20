import React from 'react';
import styles from './ProfileScreen.module.scss';
import windows from '../../assets/assets/windows.png';
import mobile2 from '../../assets/assets/mobile2.png';
import camera from '../../assets/assets/camera.png';

const ProfileScreen = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1text}>My Profile</h1>
            <div className={styles.fcon}>
                <div className={styles.avatar}>
                    <h1>J</h1>
                    <div className={styles.camcon}>
                        <img
                        src= {camera} 
                        className={styles.imgcam}
                        alt="Camera Icon"
                        />
                    </div>
                </div>
                <div className={styles.innercon1}>
                    <h1>Joseph Anderson</h1>
                    <p>You are using Ticked for free</p>
                </div>
            </div>
            <div className={styles.innercon2}>
                <h1>Personal Information</h1>
                <a href="/">
                    Edit details
                </a>
            </div>
            <div className={styles.innercon3}>
                <div>
                    <h1>Full Name</h1>
                    <p>Joseph Anderson</p>
                </div>
                <div>
                    <h1>Email Address</h1>
                    <p>josephanderson@workmail.com</p>
                </div>
            </div>
            <div className={styles.innercon3}>
                <div>
                    <h1>Password</h1>
                    <p>Enter New Password</p>
                </div>
                <div>
                    <h1>Phone Number</h1>
                    <p>+234 813 666 7878</p>
                </div>
            </div>
            <h1 className={styles.h12text}>Manage Account</h1>
            <div className={styles.innercon4}>
                <input type="checkbox" name="" id="" />
                <h3>Receive an email when you sign in</h3>
            </div>
            <div className={styles.innercon5}>
                <img
                src= {windows} 
                className={styles.imgwin}
                alt="Windows Icon"
                />
                <div className={styles.innercon5a}>
                    <h1>Windows 10</h1>
                    <p>Chrome Browser, At present 129.205.124.143, Lagos Nigeria</p>
                </div>
                <div className={styles.innercon5b}>
                    <p>This Device</p>
                </div>
            </div>
            <div className={styles.innercon6}>
                <img
                src= {mobile2} 
                className={styles.imgmob2}
                alt="Mobile Icon"
                />
                <div className={styles.innercon6a}>
                    <h1>IOS 15.3</h1>
                    <p>Safari Browser, Today 09:59, 129.205.124.143, Lagos Nigeria</p>
                </div>
                <div className={styles.innercon6b}>
                    <p>This Device</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;