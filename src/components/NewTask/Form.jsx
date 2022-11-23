import React, { useState } from 'react'
import dateIcon from '../../assets/newTask/calender.png'
import clockIcon from '../../assets/newTask/clock.png'
import styles from '../../core/todo/NewTask.module.scss'
import Select from 'react-select';
import Modal from './Modal';

function Form() {
  const [dateInput, setDateType] = useState('text')
  const [timeInput, setTimeType] = useState('text')
  const [openModal, setOpenModal] = useState(false);
  

  // options
  const options = [
    {value: 'Never', label:'Never'},
    {value: 'Every Day', label:'Every Day'},
    {value: 'Every Week', label:'Every Week'},
    {value: 'Every 2 Weeks', label:'Every 2 Weeks'},
    {value: 'Every Month', label:'Every Month'},
    {value: 'Every Year', label:'Every Year'},
  ]

  // option styles
  const selectStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', border:'none'}),
    option: (styles, state) => {
      return {
        ...styles,
        borderBottom: '.5px solid #707070',
        padding: '10px',
        color: state.isFocused ? "purple" : "grey",
        backgroundColor: state.isSelected ? "white" : "white",
      }
    }
  }


  // values
  const [data, setData] = useState({
    title: "",
    description:"",
    date:"",
    time:"",
    repeat: "",
    assistant:""
  })

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }


  return (
    <form className={styles.newTaskForm} onSubmit={(e) => {
      e.preventDefault()
      setOpenModal(true)
      console.log('form clicked')
    }}>
      <div className={styles.formGroup}>
        <label htmlFor='todo' className={styles.newTaskLabel}>
          Task Title
        </label>
        <input
          className={styles.newTaskInput}
          type='text'
          placeholder='What do you want to do?'
          id='title'
          value={data.title}
          onChange={(e) => handle(e)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='task_description' className={styles.newTaskLabel}>
          Task Description
        </label>
        <textarea
          placeholder='Describe what you want to do?'
          id='description'
          className={styles.newTaskTextarea}
          value={data.description}
          onChange={(e) => handle(e)}
          required></textarea>
      </div>
      <div className={`${styles.formGroup} ${styles.newTaskRow}`}>
        <div className={styles.formGroup}>
          <label htmlFor='date' className={styles.newTaskLabel}>
            Date
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={dateInput}
              value={data.date}
              onChange={(e) => handle(e)}
              placeholder='Select date'
              id='date'
              onFocus={() => setDateType('date')}
              onBlur={() => setDateType('text')}
              required
            />
            <span
              className={`${styles.dateIcon} ${styles.icon}`}
              style={
                dateInput === 'date'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }
              onClick={() => setDateType('date')}
              onBlur={() => setDateType('text')}>
              <img
                className={styles.newTaskImg}
                src={dateIcon}
                alt='Date icon'
              />
            </span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='time' className={styles.newTaskLabel}>
            Select reminder
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInputTime}
              type={timeInput}
              value={data.time}
              onChange={(e) => handle(e)}
              placeholder='Select time'
              id='time'
              onFocus={() => setTimeType('time')}
              onBlur={() => setTimeType('text')}
              required
            />
            <span
              className={`${styles.clockIcon} ${styles.icon}`}
              style={
                timeInput === 'time'
                  ? { display: 'none' }
                  : { display: 'inline' }
              }
              onClick={() => setTimeType('time')}
              onBlur={() => setTimeType('text')}>
              <img
                className={styles.newTaskImg}
                src={clockIcon}
                alt='Clock icon'
              />
            </span>
          </div>
        </div>
      </div>
      {/* Drop down */}
      <div className={styles.formGroup}>
        <label htmlFor='repeat' className={styles.newTaskLabel}>
          Repeat
        </label>
        <Select options={options} id='repeat' className={styles.formSelect} onChange={(e) => data.repeat = e.value} styles={selectStyles} placeholder="Select Option" />

      </div>
      <div className={`${styles.formGroup} ${styles.radio_container}`}>
        <label htmlFor='virtual_assistant' className={styles.newTaskLabel}>
          Virtual Assistant
        </label>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            value='Assign the task to assistant'
            onChange={ (e) => handle(e) }
            id='assistant'
            name='virtual_assistant'
            required
          />{' '}
          Assign the task to assistant
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            value='Get a call from an assistant to remind you'
            onChange={(e) => handle(e)}
            id='assistant'
            name='virtual_assistant'
            required
          />{' '}
          Get a call from an assistant to remind you
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            value='None'
            onChange={ (e) => handle(e) }
            id='assistant'
            name='virtual_assistant'
            required
          />{' '}
            None
        </div>
      </div>
   
      <button className={styles.newTaskButton} type='submit'>
        Create Task
        </button>
   
      <Modal
       title={data.title}
       description={data.description}
       date={data.date}
       time={data.time}
       repeat={data.repeat}
       assistant={data.assistant}
        open={openModal}  onClose={() => setOpenModal(false)}
      />
    </form>
  )
}

export default Form