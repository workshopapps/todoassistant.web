import React from 'react'
import style from './MobileNav.module.scss';
import Logo from '../../assets/logo.png';
import Hamburger from '../../assets/hamburger.png';
import ArrowDown from '../../assets/arrow-down.png';
import ClientImg from '../../assets/Ellipse 125.png';

const MobileNav = () => {
  return (
    <>  
            {/*This div represents the navbar on mobile/tabs*/}
        <div className={style.mobile_nav}>
            <nav className={style.nav_fluid}>
                <div className={style.tick_logo}>
                    <img src={Logo} alt='logo' />
                </div>
                <a href='/'>
                    <img src={Hamburger} alt='menu' />
                </a>
            </nav>
            <header className={style.heading}>
                <h5><span className={style.thick_border}>New T</span>ask</h5>
            </header>
        </div>


            {/*The following represents the topnavbar on desktop views*/}
        <div className={style.topBar_destp}>
            <header className={style.heading}>
                <h5><span className={style.thick_border}>New T</span>ask</h5>
            </header>
            <div className={style.client__profile}>
                <img src={ClientImg} alt='' />
                <p>Joseph A.</p>
                <img src={ArrowDown} alt='dropdown menu' />
            </div>
        </div>
    </>
  )
}

export default MobileNav