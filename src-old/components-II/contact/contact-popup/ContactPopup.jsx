import React, {useState} from 'react'
import './ContactPopup.scss'

const ContactPopup = () => {
    const [values, setValues] = useState({
        email: '',
        message: ''
      })
    
      const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

        const handleSubmit = e =>{
            e.preventDefault()
            alert('Submitted')
          }
  return (
    <div className='contact__popup'>
       <div className='head' >
            <h3>Ticked</h3>
            <p>Start a conversation, Ask us anthing or share a feedback</p>
       </div>
       <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='email'>Email Address</label>
            <input required onChange={handleChange} id='email' type='email' name='email' placeholder='Ezegoodluck887@gmail.com'/>
        </div>
        <div>
            <label htmlFor='message'>Your Message</label>
            <textarea required onChange={handleChange} id='message' type='message' placeholder='I have issues when creating task with my desktop app' />
        </div>
        <button type='submit'>Submit Message</button>
       </form>
    </div>
  )
}

export default ContactPopup