import React, {useContext} from 'react'
import styles from "./Dropdown.module.scss"
import settings from '../../assets/assets/setting-2.png';
import logoutpic from '../../assets/assets/logoutpic.png';
import rightarrow from '../../assets/assets/arrow-right.png';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { logout } from '../../contexts/authContext/AuthActions';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogout = ()=>{
        dispatch(logout());

        navigate("/login");
    }

  return (
    <div className = {styles.drop_container}>
        <div className = {styles.menubarcon}>
            <div className={styles.menubarcon1}>
                <img
                src= {settings} 
                className={styles.settings}
                alt="Settings Icon"
                />
                <p>Settings</p>
            </div>
            <div><a href="/" className={styles.menubarcon2}>
                <p>Profile</p>
                <img
                src= {rightarrow} 
                className={styles.rightarrow}
                alt="Right Arrow Icon"
                />
            </a></div>
            <div><a href="/" className={styles.menubarcon2}>
                <p>Preferences</p>
                <img
                src= {rightarrow} 
                className={styles.rightarrow}
                alt="Right Arrow Icon"
                />
            </a></div>
            <div className={styles.logoutcon} onClick={handleLogout} >
                <img
                src= {logoutpic} 
                className={styles.logout}
                alt="Logout Icon"
                />
                <p>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default Dropdown