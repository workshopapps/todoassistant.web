import React from "react";
import style from "./tickedmark.module.scss";
import mantask from "./img/mantask.png";
import prev from "./img/web-app-home.png";
import whitecheck from "./img/wcheck.svg";
import purplecheck from "./img/pcheck.svg";
import stars from "./img/stars.svg";
import mail from "./img/mail.svg";
import TMicon from "./img/TMicon.svg";
import TEicon from "./img/TEicon.svg";
import FRicon from "./img/FRicon.svg";
import txtbub from "./img/textbubb.svg";

import adnd from "./img/adnd.png";
import kbkr from "./img/kbkr.png";
import ssb from "./img/ssb.png";

function TickedMark() {
  return (
    <>
      <div className={style.TMhero}>
        <h1 className={style.TMHhtxt}>
          Complete your Set Tasks <br />
          with assistance from an <br />
          Executive Assistant
        </h1>
        <p className={style.TMHptxt}>
          Ticked is a task manager built for busy schedules, with an in app
          executive assistant to keep you on top of the hassle
        </p>
        <div className={style.TMHemail}>
          <img src={mail} alt="" />
          <input
            id={style.TMHEm}
            type="email"
            name=""
            placeholder="Enter your email"
          />
          <button className={style.TMHEbtn}>Start for free</button>
        </div>
        <img src={prev} alt="" />
        <p>
          Join over 2000 happy customers using ticked to stay on track one task
          at a time
        </p>
      </div>
      <div className={style.TMwfy}>
        <h3 className={style.TMWh}>
          Why we are for <br /> You?
        </h3>
        <div className={style.TMWarr}>
          <div className={style.TMWa}>
            <img className={style.TMWi} src={TMicon} alt="" />
            <h5 className={style.TMWAh}>Task Management</h5>
            <p>
              The process of managing a task through its life cycle. It involves
              planning, execution, and, tracking.
            </p>
          </div>
          <div className={style.TMWa}>
            <img className={style.TMWi} src={FRicon} alt="" />
            <h5 className={style.TMWAh}>Follow up reminders</h5>
            <p>
              Through follow up calls and constant communication, our assistant
              is always there to keep you on track
            </p>
          </div>
          <div className={style.TMWa}>
            <img className={style.TMWi} src={TEicon} alt="" />
            <h5 className={style.TMWAh}>Task Execution</h5>
            <p>
              We get it, getting is a virtual is rather cost heavy? but there
              are those simple basic things, you wish you could delegate
            </p>
          </div>
        </div>
      </div>
      <div className={style.TMsup}>
        <div className={style.TMStbx}>
          <h4 className={style.TMSh}>
            You could execute like a superhuman today
          </h4>
          <p className={style.TMSHp}>
            Use ticked to create task and collaborate with your productivity
            assistant in getting the work done with ease
          </p>
          <button className={style.TMSbtn}>Get Started</button>
        </div>
        <img src={mantask} alt="" />
      </div>
      <div className={style.TMWsmart}>
        <div className={style.TMWStop}>
          <p className={style.TMWSo}>
            <span className={style.TMWSor}>Work smarter</span> <br />
            with the support of a assistant friend
          </p>
          <button className={style.gstpbtn}>Get Started Now</button>
        </div>
        <div className={style.TMWStop}>
          <div className={style.TMWSbody}>
            <div className={style.TMWSarr}>
              <div className={style.TWWtag}>
                <p className={style.TWWtxt}>1</p>
              </div>
              <div>
                <h4 className={style.TWWSsh}>Create Account</h4>
                <p className={style.TMWSp}>
                  Enter email, password and call
                  <br /> number to get started
                </p>
              </div>
            </div>
            <div className={style.TMWSarr}>
              <div className={style.TWWtag}>
                <p className={style.TWWtxt}>2</p>
              </div>
              <div>
                <h4 className={style.TWWSsh}>Create task</h4>
                <p className={style.TMWSp}>
                  Using our flexible create task flow, <br /> you can create a
                  task in a minute
                </p>
              </div>
            </div>
            <div className={style.TMWSarr}>
              <div className={style.TWWtag}>
                <p className={style.TWWtxt}>3</p>
              </div>
              <div>
                <h4 className={style.TWWSsh}>Execute with ease</h4>
                <p className={style.TMWSp}>
                  delegate to your 24/7 productivity <br /> assistant
                </p>
              </div>
            </div>
          </div>
          <img src={txtbub} alt="" />
        </div>
      </div>
      <div className={style.TMprice}>
        <h2 className={style.TMPh}>Get results first. Pick a plan later.</h2>
        <div className={style.TMParray}>
          <div className={style.TMPa}>
            <div>
              <p>Basic</p>
              <p>
                <span className={style.TMPAbt}>Free</span>
              </p>
              <p>For Everyone</p>
            </div>
            <hr className={style.gryline} />
            <div className={style.TMPSa}>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Task manager</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Reminders</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Customization</p>
              </span>
            </div>
            <button className={style.TMSbtn}>Get Started</button>
          </div>

          <div className={style.TMPa} id={style.TMPap}>
            <div>
              <p className={style.TMAPw}>Popular</p>
              <p className={style.TMAPw}>
                <span className={style.TMPAbt} id={style.TMAPw}>
                  $6
                </span>
                /month
              </p>
              <p className={style.TMAPw}>For the Busy</p>
            </div>
            <hr className={style.gryline} />
            <div className={style.TMPSa}>
              <span className={style.TMPAl}>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p className={style.TMAPw}>Task manager</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p className={style.TMAPw}>Reminders</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p className={style.TMAPw}>Customization</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p className={style.TMAPw}>Productivity assistant</p>
              </span>
            </div>
            <button className={style.gstpbtn}>Get started</button>
          </div>

          <div className={style.TMPa}>
            <div>
              <p>Advanced</p>
              <p>
                <span className={style.TMPAbt}>$100</span>
                /month
              </p>
              <p>For the Classy</p>
            </div>
            <hr className={style.gryline} />
            <div className={style.TMPSa}>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Task manager</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Reminders</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Customization</p>
              </span>
              <span className={style.TMPAl}>
                <div className={style.spnimg}>
                  <img src={whitecheck} alt="" />
                </div>
                <p>Personal productivity assistant</p>
              </span>
            </div>
            <button className={style.TMSbtn}>Contact Us</button>
          </div>
        </div>
      </div>
      <div className={style.TMrev}>
        <h2 className={style.TMRh}>What people are saying about us</h2>
        <div className={style.TMRarr}>
          <div className={style.TMRa}>
            <img src={stars} className={style.TMRAs} alt="" />
            <p>
              “Being able to assign simple tasks for my executive assistant to
              carry out for me is such a big flex and exactly why I love this
              app”
            </p>
            <div className={style.TMRAf}>
              <img src={kbkr} alt="" />
              <div>
                <h6 className={style.TMRAh}>Kartik Bansal</h6>
                <p className={style.TMRAfp}>Kota, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className={style.TMRa}>
            <img src={stars} className={style.TMRAs} alt="" />
            <p>
              “With the ticked app, I've been able to curb procrastination
              because I can not only schedule my taks but I can also assign
              tasks to my executive assistant.”
            </p>
            <div className={style.TMRAf}>
              <img src={adnd} alt="" />
              <div>
                <h6 className={style.TMRAh}>Anil Dvivedi</h6>
                <p className={style.TMRAfp}>New Delhi</p>
              </div>
            </div>
          </div>

          <div className={style.TMRa}>
            <img src={stars} className={style.TMRAs} alt="" />
            <p>
              “The “in-app” executive assistant call constantly provides me with
              ample motivation to ensure I get all my tasks done before the end
              of the day ensuring that I can feel delighted to complete my set
              tasks.”
            </p>
            <div className={style.TMRAf}>
              <img src={ssb} alt="" />
              <div>
                <h6 className={style.TMRAh}>Srijan Sirasikar</h6>
                <p className={style.TMRAfp}>Bhadrak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TickedMark;
