import React, { useState } from 'react'
import dateIcon from '../../assets/dateIcon.svg'
import clockIcon from '../../assets/clockIcon.svg'
import dropDownIcon from '../../assets/dropDown.svg'

function Form() {

    const [dateInput, setDateType] = useState('text')
    const [timeInput, setTimeType] = useState('text')
    const [isDropped, setDropdwon] = useState(false)
    const [selectedValue, setSelectedValue] = useState('Choose an option')

  return (
      <form>
          <div className='form-group'>
              <label htmlFor='todo'>Task Title</label>
              <input type='text' placeholder='What do you want to do?' id='todo'/>
          </div>
          <div className='form-group'>
              <label htmlFor='task_description'>Task Description</label>
              <textarea placeholder='Describe what you want to do?' id='task_description'></textarea>
          </div>
          <div className='form-group row'>
            <div className='form-group'>
                  <label htmlFor='date'>Date</label>
                  <div className='form-group__item'>
                      <input type={dateInput} placeholder='Select date' id='date' onFocus={() => setDateType('date')} onBlur={() => setDateType('text')} /> <span className='dateIcon icon' style={dateInput === 'date' ? { display: 'none' } : {display:'inline'}} onClick={() => setDateType('date')} onBlur={() => setDateType('text')}><img src={dateIcon} alt='Date icon' /></span> 
                  </div>
            </div>
            <div className='form-group'>
                <label htmlFor='time'>Select reminder</label>
                  <div className='form-group__item'>
                      <input type={ timeInput } placeholder='Select time' id='time' onFocus={() => setTimeType('time')} onBlur={() => setTimeType('text')} /><span className='clockIcon icon' style={timeInput === 'time' ? { display: 'none' } : {display:'inline'}} onClick={() => setTimeType('time')} onBlur={() => setTimeType('text')}><img src= {clockIcon} alt='Clock icon'  /></span>
                </div>
            </div>
          </div>
          <div className='form-group'>
              <label htmlFor='repeat'>Repeat</label>
              <div className='form-group__item select'>
                  <input type='text' placeholder='Choose an option' value={selectedValue} id='repeat' className='repeat' onClick={() => setDropdwon(!isDropped)} onMouseUp={ () => setDropdwon(!isDropped) } />
                  <span className='dropdownIcon icon' onClick={()=> setDropdwon(!isDropped)}><img src={dropDownIcon} alt='Dropdown icon' /></span>
              </div>
              <ul className='options-container' style={isDropped ? {display:'flex'} : {display:'none'}}>
                  <li onClick={() => { setSelectedValue('Never'); setDropdwon(!isDropped) }}>Never</li>
                    <li onClick={() => { setSelectedValue('Every Day'); setDropdwon(!isDropped) }}>Every Day</li>
                    <li onClick={() => { setSelectedValue('Every Week'); setDropdwon(!isDropped) }}>Every Week</li>
                    <li onClick={() => { setSelectedValue('Every 2 Weeks'); setDropdwon(!isDropped) }}>Every 2 Weeks</li>
                    <li onClick={() => { setSelectedValue('Every Month'); setDropdwon(!isDropped) }}>Every Month</li>
                    <li onClick={() => { setSelectedValue('Every Year'); setDropdwon(!isDropped) }} className='lastchild'>Every Year</li>
              </ul>
          </div>
          <div className='form-group radio_container'>
              <label htmlFor='virtual_assistant'>Virtual Assistant</label>
              <div className='radio_option'>
                <input type='radio'  name='virtual_assistant'/> Assign the task to assistant
              </div>
              <div className='radio_option'>
                <input type='radio'  name='virtual_assistant'/> Get a call from an assistant to remind you
              </div>
              <div className='radio_option'>
                <input type='radio'  name='virtual_assistant'/> None
              </div>
          </div>
          <button type='submit'>Create Task</button>
    </form>
  )
}

export default Form