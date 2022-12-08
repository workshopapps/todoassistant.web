import React, {useContext} from 'react'
import styles from "./Dropdown.module.scss"
// import settings from '../../assets/assets/setting-2.png';
import logoutpic from '../../assets/assets/logoutpic.png';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { logout } from '../../contexts/authContext/AuthActions';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";

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
            <div><a href="/dashboard/profile" className={styles.menubarcon2}>
                <p>Profile</p>
                <AiOutlineRight className={styles.rightarrow} size={15}/>                
            </a></div>
            <div><a href="/dashboard/edit" className={styles.menubarcon2}>
                <p>Edit Profile</p>
                <AiOutlineRight className={styles.rightarrow} size={15}/>
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