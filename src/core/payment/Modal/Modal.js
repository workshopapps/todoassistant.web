import React from 'react';
import successicon from '../../../assets/tick-circlesuccess.svg';
import error from '../../../assets/close-circleerror.svg';

import './Modal.css';
import Button from '../../../Components/button/Button';

const Modal = ({ success, open, setOpen }) => {
    const handleBackdrop = () => {
        console.log('modal backdrop');
    };
    const handleModal = (e) => {
        e.stopPropagation();
        console.log('modal');
    };
    return (
        <div
            className={`modal__backdrop ${open === false ? 'closeModal' : ''}`}
            onClick={handleBackdrop}>
            <div className={`modal ${open === false ? 'closeModal' : ''}`}>
                <div className={`modal ${open === false ? 'closeModal' : ''}`}>
                    <div className='top__modal '>
                        <img
                            src={success ? successicon : error}
                            alt='closeicon'
                            onClick={handleModal}
                        />
                        <h4>{success ? 'Success!' : 'Error!'}</h4>
                        <p>
                            {success
                                ? 'You have successful made a basic subscription of $0.00'
                                : 'Ooopss! something went wrong, check your card details again and input the correct details.'}{' '}
                        </p>
                    </div>
                    <div className='bottom__modal'>
                        <button
                            className='button'
                            type='submit'
                            onClick={() => setOpen((prev) => !prev)}>
                            {success ? 'Go Home' : 'Try again'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
