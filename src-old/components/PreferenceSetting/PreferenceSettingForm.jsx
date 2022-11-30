import { useState } from "react";
import style from "./PreferenceForm.module.scss";

function PrefSetForm() {
  const [dateformat, setDateFormat] = useState("dmy");
  const [timeformat, setTimeFormat] = useState("12");
  const [language, setLanguage] = useState("english");
  const [timezone, setTimezone] = useState(false);
  const [timezonenot, setTimezoneNot] = useState(false);

  const handleLanguageChange = e => {
    setLanguage(e.target.value);
  };
  const handleTimeZoneChange = e => {
    setTimezone(e.target.value);
  };
  const handleTimeZoneNot = () => {
    setTimezoneNot(true);
  };

  const handleDateFormatChange = e => {
    setDateFormat(+e.currentTarget.value);
  };

  const handleTimeFormatChange = e => {
    setTimeFormat(+e.currentTarget.value);
  };

  return (
    <div className={style.prefbody}>
      <h6 className={style.p}>Preferences</h6>
      <form className={style.preferenceform}>
        <div className={style.prefform}>
          <h4 className={style.prefformhead}>Language and Region</h4>
          <div className={style.prefformarray}>
            <div className={style.par}>
              <div className="">
                <label className={style.l} htmlFor="language">
                  {language}
                </label>
                <br />
                <select
                  className={style.select}
                  onChange={handleLanguageChange}
                  name="language"
                >
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="spanish">Spanish</option>
                </select>
              </div>

              <div className="">
                <label className={style.l} htmlFor="time-zone">
                  {timezone}
                </label>
                <br />
                <select
                  className={style.select}
                  onChange={handleTimeZoneChange}
                  name="time-zone"
                >
                  <option value="lagos">Africa/Lagos</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                </select>
                <br />
                <input
                  onChange={handleTimeZoneNot}
                  type="checkbox"
                  name="time-change"
                />
                <label htmlFor="time-change" className="time-change">
                  {timezonenot}
                </label>
              </div>
            </div>

            <div className={style.pardate}>
              <div className="">
                <h5 className={style.l}>Date format</h5>

                <div className={style.radioar}>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="dmy"
                        checked={dateformat === "dmy"}
                        onChange={handleDateFormatChange}
                      />
                      dd/mm/yy
                    </label>
                  </div>

                  <div className={style.radio}>
                    <label>
                      <input
                        type="radio"
                        value="mdy"
                        checked={dateformat === "mdy"}
                        onChange={handleDateFormatChange}
                      />
                      mm/dd/yy
                    </label>
                  </div>

                  <div className={style.radio}>
                    <label>
                      <input
                        type="radio"
                        value="ymd"
                        checked={dateformat === "ymd"}
                        onChange={handleDateFormatChange}
                      />
                      yy/mm/dd
                    </label>
                  </div>
                </div>
              </div>

              <div className="">
                <h5 className={style.l}>Time format</h5>
                <div className={style.radioar}>
                  <div className={style.radio}>
                    <label>
                      <input
                        type="radio"
                        value="12"
                        checked={timeformat === 12}
                        onChange={handleTimeFormatChange}
                      />
                      12 hours
                    </label>
                  </div>

                  <div className={style.radio}>
                    <label>
                      <input
                        type="radio"
                        value="24"
                        checked={timeformat === 24}
                        onChange={handleTimeFormatChange}
                      />
                      24 hours
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.prefform}>
          <h4 className={style.prefformhead}>Reminder and Notifications</h4>
          <div className={style.par}>
            <div className={style.prefformarray}>
              <div>
                <label className={style.l} htmlFor="daily-reminder">
                  Daily Reminder
                </label>
                <br />
                <input
                  className={style.time}
                  type="time"
                  name="daily-reminder"
                />
                <br />
                <input type="checkbox" name="disable-daily-rem" />
                <label
                  htmlFor="disable-daily-rem"
                  className="disable-daily-rem"
                >
                  Notify me of time changes
                </label>
              </div>
            </div>

            <div className={style.prefformarray}>
              <label className={style.l} htmlFor="web-reminder">
                Web Reminder
              </label>
              <br />
              <select className={style.select} name="web-reminder">
                <option value="web-yes">Remind me on the web</option>
                <option value="web-no">Do not remind me on the web</option>
              </select>
            </div>
          </div>

          <div className={style.prefformarray}>
            <h5 className={style.l}>Email Notification</h5>
            <br />
            <div>
              <input
                className={style.encheck}
                type="checkbox"
                name="enable-email-not"
              />
              <label htmlFor="enable-email-not">
                Enable email notifications to recieve your task in your mails
              </label>
            </div>
          </div>
        </div>

        <button id={style.prefsubbtn} type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default PrefSetForm;
