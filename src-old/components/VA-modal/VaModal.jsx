// import React, { useState } from 'react'
import style from './Va1.module.scss';
import CloseButton from '../../assets/close-square.png';

// import MobileNav from './MobileNav';



const VaModal = (props) => {
// const [showModal, setShowModal] = useState(false);
    
//   const handleShow = () => setShowModal(true);
//   const handleClose = () =>{
//       // e.preventDefault();
//            setShowModal(false);
//   }
    // const fName = 'Michael';

  return (
    <div>
        <main className={style.body_modal}>
        {/*<MobileNav />*/}
            {/* <button id='create_task' onClick={handleShow}>Create Task</button> */}
            {/* Modal Container */}
            <section className={style.va_main} {...props}>
            {/* <section className={style.va_main} {...props} show={showModal} onHide={handleClose} centered> */}
                <a href='/' className={style.cancel_button}>
                {/* <a href='/' className={style.cancel_button} onClick={props.onClose} closeButton> */}
                    <img src={CloseButton} alt='close button' />
                </a>
                <div className={style.calling_img}>
                    <img src={props.imgName} alt='' />
                </div>
                <div className={style.talking_text}>
                    <h4>{props.text}</h4>
                    <p>{props.subtext}</p>
                </div>
                <div className={style.talking_btns}>
                    <button>{props.btn1}</button>
                    {/* <button onClick={handleClose}>{props.btn2}</button> */}
                    <button>{props.btn2}</button>
                </div>
            </section>
        </main>
    
        

    </div>
  )
}

export default VaModal