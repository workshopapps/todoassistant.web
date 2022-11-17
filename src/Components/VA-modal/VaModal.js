import React from 'react'
import './Va1.scss';
import CloseButton from '../../assets/close-square.png';
import TalkingMan from '../../assets/talking.png';
import MobileNav from './MobileNav';

const VaModal = () => {
    const fName = 'Michael';
  return (
    <div>
        <MobileNav />
        <main className='va-main'>
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
        </main>
    
        {/* To test it, pls uncomment VaModal component in app.js */}

    </div>
  )
}

export default VaModal