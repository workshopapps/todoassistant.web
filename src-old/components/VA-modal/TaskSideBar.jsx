import React from 'react'
import style from  './TaskSideBar.module.scss';
import Logo from '../../assets/logo.png';
import ArrowLeft from '../../assets/arrow-left.png';

const TaskSideBar = () => {
  return (
    <div className={style.side_bar_wrapper}>
        <div className={style.sidebar_logo} >
            <img src={Logo} alt='logo' />
        </div>

        <a href='/' className={style.back__btn}>
            <img src={ArrowLeft} alt='left arrow' />
            Back
        </a>
    </div>
  )
}

export default TaskSideBar