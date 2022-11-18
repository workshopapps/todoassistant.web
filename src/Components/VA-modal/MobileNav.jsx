import React from 'react'
import './MobileNav.scss';
import Logo from '../../assets/logo.png';
import Hamburger from '../../assets/hamburger.png';

const MobileNav = () => {
  return (
    <div className='mobile_nav'>
        <nav className='nav-fluid'>
            <div className='tick-logo'>
                <img src={Logo} alt='logo' />
            </div>
            <a href='/'>
                <img src={Hamburger} alt='menu' />
            </a>
        </nav>
        <header className='heading'>
            <h5><span className='thick-border'>New T</span>ask</h5>
        </header>
    </div>
  )
}

export default MobileNav