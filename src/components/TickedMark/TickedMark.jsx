import React from "react";
import style from "./tickedmark.module.scss";
import mantask from "./img/mantask.png";
import prev from "./img/web-app-home.png";
import whitecheck from "./img/wcheck.svg";
import purplecheck from "./img/pcheck.svg";
import stars from "./img/stars.svg";
import adnd from "./img/adnd.png";
import kbkr from "./img/kbkr.png";
import ssb from "./img/ssb.png";

function TickedMark() {
  return (
    <>
      <div className={style.TMhero}>
        <h1>
          Complete your Set Tasks with assistance from an Executive Assistant
        </h1>
        <p>
          Ticked is a task manager built for busy schedules, with an in app
          executive assistant to keep you on top of the hassle
        </p>
        <div>
          <img src="" alt="" />
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button>Start for free</button>
        </div>
        <img src={prev} alt="" />
        <p>
          Join over 2000 happy customers using ticked to stay on track one task
          at a time
        </p>
      </div>
      <div className={style.TMwfy}>
        <h3>
          Why we are for <br /> You?
        </h3>
        <div>
          <div>
            <img src="" alt="" />
            <h5>Task Management</h5>
            <p>
              The process of managing a task through its life cycle. It involves
              planning, execution, and, tracking.
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <h5>Follow up reminders</h5>
            <p>
              Through follow up calls and constant communication, our assistant
              is always there to keep you on track
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <h5>Task Execution</h5>
            <p>
              We get it, getting is a virtual is rather cost heavy? but there
              are those simple basic things, you wish you could delegate
            </p>
          </div>
        </div>
      </div>
      <div className={style.TMsuperhuman}>
        <div>
          <h4>You could execute like a superhuman today</h4>
          <p>
            Use ticked to create task and collaborate with your productivity
            assistant in getting the work done with ease
          </p>
          <button></button>
        </div>
        <img src={mantask} alt="" />
      </div>
      <div className={style.TMWsmart}>
        <div className={style.TMWStop}>
          <p>
            <span>Work smarter</span> <br />
            with the support of a assistant friend
          </p>
          <button>Get Started Now</button>
        </div>
        <div className={style.TMWSbody}>
          <div className="TMWSarr">
            <img src="" alt="" />
            <h4 className="TWWSsh">Create Account</h4>
            <p>Enter email, password and call number to get started</p>
          </div>
          <div className="TMWSarr">
            <img src="" alt="" />
            <h4 className="TWWSsh">Create task</h4>
            <p>
              Using our flexible create task flow, you can create a task in a
              minute
            </p>
          </div>
          <div className="TMWSarr">
            <img src="" alt="" />
            <h4 className="TWWSsh">Execute with ease</h4>
            <p>delegate to your 24/7 productivity assistant </p>
          </div>
        </div>
      </div>
      <div className={style.TMpricing}>
        <h2 className={style.TMPh}>Get results first. Pick a plan later.</h2>
        <div className={style.TMParray}>
          <div>
            <div>
              <p>Basic</p>
              <p>
                <span>Free</span>
              </p>
              <p>For Everyone</p>
            </div>
            <hr className={style.gryline} />
            <div>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Task manager</p>
              </span>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Reminders</p>
              </span>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Customization</p>
              </span>
            </div>
            <button>Get Started</button>
          </div>

          <div>
            <div>
              <p>Popular</p>
              <p>
                <span>$6</span>
                /month
              </p>
              <p>For the Busy</p>
            </div>
            <hr className={style.gryline} />
            <div>
              <span>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p>Task manager</p>
              </span>
              <span>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p>Reminders</p>
              </span>
              <span>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p>Customization</p>
              </span>
              <span>
                <div className={style.spnpimg}>
                  <img src={purplecheck} alt="" />
                </div>
                <p>Productivity assistant</p>
              </span>
            </div>
            <button>Get started</button>
          </div>

          <div>
            <div>
              <p>Advanced</p>
              <p>
                <span>$100</span>
                /month
              </p>
              <p>For the Classy</p>
            </div>
            <hr className={style.gryline} />
            <div>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Task manager</p>
              </span>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Reminders</p>
              </span>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Customization</p>
              </span>
              <span>
                <div className="spnimg">
                  <img src={whitecheck} alt="" />
                </div>
                <p>Personal productivity assistant</p>
              </span>
            </div>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className={style.TMreview}>
        <h2 className={style.TMRh}>What people are saying about us</h2>
        <div className={style.TMRarr}>
          <div className={style.TMRa}>
            <img src={stars} alt="" />
            <p>
              “Being able to assign simple tasks for my executive assistant to
              carry out for me is such a big flex and exactly why I love this
              app”
            </p>
            <div className={style.TMRAf}>
              <img src={kbkr} alt="" />
              <div>
                <h6>Kartik Bansal</h6>
                <p>Kota, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className={style.TMRa}>
            <img src={stars} alt="" />
            <p>
              “With the ticked app, I've been able to curb procrastination
              because I can not only schedule my taks but I can also assign
              tasks to my executive assistant.”
            </p>
            <div className={style.TMRAf}>
              <img src={adnd} alt="" />
              <div>
                <h6>Anil Dvivedi</h6>
                <p>New Delhi</p>
              </div>
            </div>
          </div>

          <div className={style.TMRa}>
            <img src={stars} alt="" />
            <p>
              “The “in-app” executive assistant call constantly provides me with
              ample motivation to ensure I get all my tasks done before the end
              of the day ensuring that I can feel delighted to complete my set
              tasks.”
            </p>
            <div className={style.TMRAf}>
              <img src={ssb} alt="" />
              <div>
                <h6>Srijan Sirasikar</h6>
                <p>Bhadrak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TickedMark;
