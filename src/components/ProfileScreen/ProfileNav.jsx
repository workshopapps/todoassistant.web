import React, {useState} from 'react';
import styles from './NavSidebar.module.scss';
import arrow from '../../assets/assets/arrow-down.png';
import menu from '../../assets/assets/menu.png';
import settings from '../../assets/assets/setting-2.png';
import logout from '../../assets/assets/logout.png';
import rightarrow from '../../assets/assets/arrow-right.png';
import logo from "../../assets/assets/tickedlogo.png";

const ProfileNav = () => {

    const [nav, setNav] = useState(false)
    const [side, setSide] = useState(false)
    return (
        <div className={styles.navcon}>
            <div className={styles.navcon1}>
                <img
                src= {menu} 
                className={styles.menu}
                alt="Menu"
                onClick={() => setSide(!side)}
                />
                <h1>Settings</h1>
                <div className={styles.navborder}></div>
            </div>
            <div className={styles.navcon2}>  
                <div className={styles.avatar}>
                    <h1>J</h1>
                </div>
                <p>Joseph A.</p>
                <img
                src= {arrow} 
                className={styles.arrow}
                alt="Down Arrow"
                onClick={() => setNav(!nav)}
                />
            </div>

            {nav ? <div className={styles.menubarcon}>
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
                <div><a href="/" className={styles.logoutcon}>
                    <img
                    src= {logout} 
                    className={styles.logout}
                    alt="Logout Icon"
                    />
                    <p>Logout</p>
                </a></div>
            </div> : ''}

            {side ? <div className={styles.sidemob}>
              <div className={styles.sidecon1}>
                <img src={logo} className={styles.logo} alt="Ticked Logo" />
              </div>
              <a href="/settings/profile" className={styles.sidemob2}>
                    <img
                    src= {rightarrow} 
                    className={styles.rightarrow1}
                    alt="Right Arrow Icon"
                    />
                 <h2>Back</h2>
              </a>
              <div className={styles.sidemob3}>
                    <img
                    src= {settings} 
                    className={styles.settings}
                    alt="Settings Icon"
                    />
                    <p>Settings</p>
                    <img
                    src= {rightarrow} 
                    className={styles.rightarrow2}
                    alt="Right Arrow Icon"
                    onClick={() => setSide(!side)}
                    />
              </div>
              <p className={styles.sidemob4p1}>Preferences</p>
              <p className={styles.sidemob4p2}> My Profile</p>
              <div><a href="/" className={styles.logoutmob}>
                    <img
                    src= {logout} 
                    className={styles.logout}
                    alt="Logout Icon"
                    />
                    <p>Logout</p>
               </a></div>
            </div> : ''}
            

        </div>
    );
};

export default ProfileNav;