import React from 'react'
import './Va1.scss';
import CloseButton from '../../assets/close-square.png';
import TalkingMan from '../../assets/talking.png';
import MobileNav from './MobileNav';
import TaskSideBar from './TaskSideBar';

const VaModal = () => {
    const fName = 'Michael';
  return (
    <div>
        <main className='task-layout'>
            <MobileNav />
            <TaskSideBar />
            <section className='va-main'>
                <a href='/' className='cancel-button'>
                    <img src={CloseButton} alt='close button' />
                </a>
                <div className='calling-img'>
                    <img src={TalkingMan} alt='talking man' />
                </div>
                <div className='talking-text'>
                    <h4>Hello, my name is {fName} and I am your virtual assistant.</h4>
                    <p>I would make sure you do not forget your tasks by giving you a call.</p>
                </div>
                <div className='talking-btns'>
                    <button className='remind-me'>Remind me</button>
                    <button className='no-thanks'>No, Thanks</button>
                </div>
            </section>
        </main>
    
        

    </div>
  )
}

export default VaModal