import React from "react";
import style from "./HowSections.module.scss"
import HowModal from "./HowModal";
import stuckAtHome from "../../assets/HowItWorks/Stuck at Home Mailing List.svg";
import CroodsFriends from "../../assets/HowItWorks/Croods Friends.svg";
import CroodsMobile from "../../assets/HowItWorks/Croods Mobile.svg";

import { useState } from "react";


const HowSections = () => {

     const [isOpen, setIsOpen] = useState(false);


     return (
          <div>
               <div className={style.how_container}>
                    {/*Header*/}
                    <div className={style.header_container}>
                         <h1 className={style.how_header}>How It <span className={style.orange}>Works?</span></h1>
                         <p className={style.how_paragraph}>It is easy as A, B, C...</p>
                    </div>

                    {/*Left Side*/}
                    <div className={style.step_container1}>
                         <div className={style.stepleft_container1}>
                              <p className={style.steps_header}>Step 1</p>
                              <p className={style.steps_paragraph1}>Get on your dashboard</p>
                              <p className={style.steps_paragraph2}>Login, describe your task, and set the date and time for your task deadline.</p>
                         </div>

                         {/*Right Side*/}
                         <div data-aos="fade-left" data-aos-duration="1500"
                              className={style.stepright_container1}>
                              <img src={stuckAtHome} className={style.steps_image1} />
                         </div>
                    </div>



                    {/*Left Side 2*/}
                    <div className={style.stepright_container2_background}>
                         <div data-aos="fade-right" data-aos-duration="1500" className={style.step_container2}>
                              <div className={style.stepright_container2}>
                                   <img src={CroodsFriends} className={style.steps_image2} />
                              </div>


                              {/*Right Side 2*/}
                              <div className={style.stepleft_container2}>
                                   <p className={style.steps_header}>Step 2</p>
                                   <p className={style.steps_paragraph12}>Personalise Virtual assitance</p>
                                   <p className={style.steps_paragraph22}>The in-app chat feature available allows you to communicate and assign tasks to a personalized Assitant.</p>
                              </div>
                         </div>
                    </div>

                    {/*Left Side 3*/}
                    <div data-aos="fade-left" data-aos-duration="1500" className={style.step_container3}>
                         <div className={style.stepleft_container3}>
                              <p className={style.steps_header}>Step 3</p>
                              <p className={style.steps_paragraph13}>Get Ticked</p>
                              <p className={style.steps_paragraph23}>Receive notifications when you complete your tasks and a call reminder when dealines are fast approaching.</p>
                         </div>

                         {/*Right Side 3*/}
                         <div>
                              <div className={style.stepright_container3}>
                                   <img src={CroodsMobile} className={style.steps_image3} />
                              </div>
                         </div>
                    </div>



                    {/* Last*/}

                    <div className={style.last_container}>
                         <p className={style.last_header}>Get Your Tasks Completed With The Support Of A <span className={style.orange}>Personal Assitant</span></p>
                         <button className={style.last_button} onClick={() => setIsOpen(true)}>Get started</button>
                         {isOpen && <HowModal setIsOpen={setIsOpen} />}
                    </div>


               </div>
          </div>

     );
};

export default HowSections;