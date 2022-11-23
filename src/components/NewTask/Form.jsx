import React, { useState } from 'react'
import dateIcon from '../../assets/newTask/calender.png'
import clockIcon from '../../assets/newTask/clock.png'
import dropDownIcon from '../../assets/newTask/dropdown.png'
import styles from '../../core/todo/NewTask.module.scss'

function Form() {
  const [dateInput, setDateType] = useState('text')
  const [timeInput, setTimeType] = useState('text')
  const [isDropped, setDropdwon] = useState(false)
  const [selectedValue, setSelectedValue] = useState('Choose an option')

  return (
    <form className={styles.newTaskForm}>
      <div className={styles.formGroup}>
        <label htmlFor='todo' className={styles.newTaskLabel}>
          Task Title
        </label>
        <input
          className={styles.newTaskInput}
          type='text'
          placeholder='What do you want to do?'
          id='todo'
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor='task_description' className={styles.newTaskLabel}>
          Task Description
        </label>
        <textarea
          placeholder='Describe what you want to do?'
          id='task_description'
          className={styles.newTaskTextarea}></textarea>
      </div>
      <div className={`${styles.formGroup} ${styles.row}`}>
        <div className={styles.formGroup}>
          <label htmlFor='date' className={styles.newTaskLabel}>
            Date
          </label>
          <div className={styles.formGroup__item}>
            <input
              className={styles.newTaskInput}
              type={dateInput}
              placeholder='Select date'
              id='date'
              onFocus={() => setDateType('date')}
              onBlur={() => setDateType('text')}
            />{' '}
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
              placeholder='Select time'
              id='time'
              onFocus={() => setTimeType('time')}
              onBlur={() => setTimeType('text')}
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
      <div className={styles.formGroup}>
        <label htmlFor='repeat' className={styles.newTaskLabel}>
          Repeat
        </label>
        <div className={`${styles.formGroup__item} ${styles.select}`}>
          <input
            type='text'
            placeholder='Choose an option'
            value={selectedValue}
            id='repeat'
            className={`${styles.repeat} ${styles.newTaskInput}`}
            onClick={() => setDropdwon(!isDropped)}
            onMouseUp={() => setDropdwon(!isDropped)}
          />
          <span
            className={`${styles.dropdownIcon} ${styles.icon}`}
            onClick={() => setDropdwon(!isDropped)}>
            <img src={dropDownIcon} alt='Dropdown icon' />
          </span>
        </div>
        <ul
          className={styles.optionsContainer}
          style={isDropped ? { display: 'flex' } : { display: 'none' }}>
          <li
            className={styles.newTaskListItem}
            onClick={() => {
              setSelectedValue('Never')
              setDropdwon(!isDropped)
            }}>
            Never
          </li>
          <li
            className={styles.newTaskListItem}
            onClick={() => {
              setSelectedValue('Every Day')
              setDropdwon(!isDropped)
            }}>
            Every Day
          </li>
          <li
            className={styles.newTaskListItem}
            onClick={() => {
              setSelectedValue('Every Week')
              setDropdwon(!isDropped)
            }}>
            Every Week
          </li>
          <li
            className={styles.newTaskListItem}
            onClick={() => {
              setSelectedValue('Every 2 Weeks')
              setDropdwon(!isDropped)
            }}>
            Every 2 Weeks
          </li>
          <li
            className={styles.newTaskListItem}
            onClick={() => {
              setSelectedValue('Every Month')
              setDropdwon(!isDropped)
            }}>
            Every Month
          </li>
          <li
            className={`${styles.newTaskListItem} ${styles.lastchild}`}
            onClick={() => {
              setSelectedValue('Every Year')
              setDropdwon(!isDropped)
            }}>
            Every Year
          </li>
        </ul>
      </div>
      <div className={`${styles.formGroup} ${styles.radio_container}`}>
        <label htmlFor='virtual_assistant' className={styles.newTaskLabel}>
          Virtual Assistant
        </label>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            name='virtual_assistant'
          />{' '}
          Assign the task to assistant
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            name='virtual_assistant'
          />{' '}
          Get a call from an assistant to remind you
        </div>
        <div className={styles.radio_option}>
          <input
            className={styles.newTaskInput}
            type='radio'
            name='virtual_assistant'
          />{' '}
          None
        </div>
      </div>
      <button className={styles.newTaskButton} type='submit'>
        Create Task
      </button>
    </form>
  )
}

export default Form