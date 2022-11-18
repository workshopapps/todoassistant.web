import React from 'react'
import './TaskSideBar.css'
import Logo from '../../assets/logo.png';
import ArrowLeft from '../../assets/arrow-left.png';

const TaskSideBar = () => {
  return (
    <div className='side_bar_wrapper'>
        <div className='sidebar-logo'>
            <img src={Logo} alt='logo' />
        </div>

        <a href='/' className='back__btn'>
            <img src={ArrowLeft} alt='left arrow' />
            Back
        </a>
    </div>
  )
}

export default TaskSideBar