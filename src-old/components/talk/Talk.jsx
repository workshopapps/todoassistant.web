import React from 'react'
import Joe from '../../assets/Joe.svg'
import Bridget from '../../assets/Bridget.svg'
import Chike from '../../assets/Chike.svg'
import './Talk.scss'

const Talk = () => {
  return (
    <section className='contact__talk'>
        <h2>Talk to real people</h2>
        <p>Here are some of the people you’ll talk to in on Live chat</p>
        <div className='container'>
        <div className='profiles'>
            <div className='item'>
                <p className='unit'>Technical Support</p>
                <img src={Joe} alt='img' />
                <p className='name'>Joe Lynn</p>
            </div>
            <div className='item'>
                <p className='unit'>Pricing and Billing </p>
                <img src={Bridget} alt='img' />
                <p className='name'>Bridget  Bello</p>
            </div>
            <div className='item'>
                <p className='unit'>Product Advice</p>
                <img src={Chike} alt='img' />
                <p className='name'>Chike Ike</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Talk