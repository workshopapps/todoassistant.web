import React, { useState } from 'react';
// import { useNavigation } from 'react-router-dom';
import './PreferencePage.css';

function PreferencePage() {

    // let navigate = useNavigation();
    
    const [checkState, setCheckState] = useState(false);
    const [dateformat, setDateformat] = useState('dd/mm/yy');
    const [language, setLanguage] = useState("english");
    const [timezone, setTimezone] = useState("UTC+2");
    const [webReminder, setWebReminder] = useState("remind_yes");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }
    const handleTimezoneChange = (e) => {
        setTimezone(e.target.value);
    }
    const handleSetDateformatChange = (e) => {
        setDateformat(e.target.value);
    }
    const handleWebReminderChange = (e) => {
        setWebReminder(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // navigate.push('/');
        console.log(dateformat, language, timezone, webReminder);
    }

    const changeState = () => {
        setCheckState(!checkState);
    }

  return (
    <div className='preferencespage'>
        <h1>Preferences</h1>
        <h2>Language and Region settings</h2>
        
        <form onSubmit={handleFormSubmit}>
        {/* Language and Time zone   */}
        <div className="double_input_select">
            <div className="single_input_select">
                <label htmlFor="language"> Language
                    <select name="language" 
                    onChange={handleLanguageChange}
                    >
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="spanish">Spanish</option>
                    </select>
                </label>
            </div>
            <div className="single_input_select">
                <label htmlFor='timezone'> Time Zone
                    <select name="timezone" 
                    onChange={handleTimezoneChange}>
                        <option value="UTC">Greenwich Mean Time</option>
                        <option value="UTC+1">West Africa Time</option>
                        <option value="UTC+2">Central Africa Time</option>
                        <option value="UTC+3">East Africa Time</option>
                    </select>
                </label>
                <div className='check_input'>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                    </label>
                    <p>Notify me of time changes</p>
                </div>
            </div>
                
        </div>

         {/* Date format and Time format */}
        <div className="double_input_select">
            <div className="single_input_select">
                <label>Date format
                    <div className='datetime_format' >
                       <div>
                           <input type="radio" name='dateformat' value='dd/mm/yy' id='dd/mm/yy' onChange={handleSetDateformatChange}
                        //    checked={dateformat === "dd/mm/yy"}
                           />
                           <label htmlFor="dd/mm/yy" >dd/mm/yy</label>
                       </div>
                       <div>
                           <input type="radio" name='dateformat' value='mm/dd/yy' id='mm/dd/yy' onChange={handleSetDateformatChange}
                        //    checked={dateformat === "mm/dd/yy"}
                           />
                           <label htmlFor="mm/dd/yy" >mm/dd/yy</label>
                       </div>
                       <div>
                           <input type="radio" name='dateformat' value='yy/mm/dd' id='yy/mm/dd' onChange={handleSetDateformatChange} 
                        //    checked={dateformat === "yy/mm/dd"}
                           />
                           <label htmlFor="yy/mm/dd" >yy/mm/dd</label>
                       </div>
                    </div>
                </label>
            </div>
            <div className="single_input_select">
                <label>Time format
                    <div className='datetime_format'>
                        <div>
                            <input type="radio" name='timeformat' value='12' id='12h'/>
                            <label htmlFor="12h">12 hours</label>
                        </div>
                        <div>
                            <input type="radio" name='timeformat' value='24' id='24h' />
                            <label htmlFor="24h">24 hours</label>
                        </div>
                    </div>
                </label>
            </div>
                
        </div>

        <h2>Reminder and Notifications</h2>

        {/* Daily reminder and Web Reminder */}
        <div className="double_input_select">
            <div className="single_input_select">
                <label> Daily Report
                    {/* <select name="" id="">
                        <option value="english">09:00</option>
                    </select> */}
                    <input type="time" disabled={checkState} name="" id="" />
                </label>
                <div className='check_input'>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" value={checkState} onChange={changeState}/>
                    </label>
                        <p className='color'>Disable daily reminder</p>
                </div>
            </div>
            <div className="single_input_select">
                <label htmlFor='web_reminder'> Web Reminder
                    <select name="web_reminder" 
                    onChange={handleWebReminderChange}>
                        <option value="remind_yes">Remind me on the web</option>
                        <option value="remind_no">Do not remind me on the web</option>
                    </select>
                </label>
            </div>
                
        </div>

        <div className="double_input_select">
            <div className="single_input_select">
                <h3>Email Notification</h3>
                <div className='check_input'>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                    </label>
                    <p>Notify me of time changes</p>
                </div>
            </div>
        </div>

        <button type='submit' className='pref_btn'>Save Changes</button>
    </form>
    </div>
  );
}

export default PreferencePage