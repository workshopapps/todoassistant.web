
import {BsBell} from "react-icons/bs";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {GoPrimitiveDot} from "react-icons/go";
import "./Notification-module.css"
const Notification = () =>{
  //notification for visual assistant 
  return(
    <section className="container">
    
    {/*back code*/}
    <div className="back-container">
    <p className="back-text">
    <AiOutlineArrowLeft className="icon-back"/>
    Back
    </p>
    </div>
    
    {/*header-title code*/}
    
    <div className="headerContainer">
  <h1 className="header-title">
  <BsBell className="header-icon"/> 
  Notification
  </h1>
  </div>
  
  {/*row content-today*/}
  
  <div className="today-row">
  <h1 className="today-title">
  Today
  </h1>
  <p className="today-subTitle"> Friday, November 11th, 2022</p>
  </div>
  
 <div className="content-holder">
 <div className="content-box">
<h3 className ="content">
John Andrew just assigned you a task
</h3>
<p className="content-today-text">Fri, Nov 11th, 2022 <GoPrimitiveDot/> 09:00AM</p>
</div>

<div className="content-box">
<h3 className="content-today-title">Anita Jacobs task is overdue</h3>
<p className="content-today-text">Fri, Nov 11th, 2022 <GoPrimitiveDot/> 07:00AM</p>
</div>

<div className="content-box content-block">
<p className="content-today-big" style ={{color:"#333333"}}>You had a missed call From Sandra David
<span className="content-today-small"> 
Fri, 11th Nov, 2022  <GoPrimitiveDot/> 05.00AM
</span>
</p>
</div>
</div>

  {/*row content-yesterday*/}
<div className="today-row">
  <h1 className="today-title">
  Yesterday
  </h1>
  <p className="today-subTitle">Thursday, November 11th, 2022</p>
  </div>
  
<div className="content-holder">
<div className="content-box">
<p className="content-today-big">Uneh Udoh edited a task 
<span className="content-today-small">
Thu, Nov 11th, 2022 <GoPrimitiveDot/> 09:00PM
</span>
</p>
</div>

<div className="content-box">
<p className="content-today-big">
Amina Shauibu task is overdue
<span className="content-today-small"> Thu, Nov 12th, 2022  <GoPrimitiveDot/> 05:00PM
</span>
</p>
</div>
</div>

  {/*row content-lastweek*/}
  
  <div className="today-row">
  <h1 className="today-title">
  Last Week
  </h1>
  </div>
  
<div className="content-holder">
<div className="content-box">
<p className="content-today-big">Effiong Mfon just sent you a message 
<span className="content-today-small">
Sun, Nov 9th, 2022  <GoPrimitiveDot/> 08:00PM
</span>
</p>
</div>

  <div className="content-box">
<p className="content-today-big">Ifeoma Nwabunze task is overdue 
<span className="content-today-small">
Fri, Nov 7th, 2022  <GoPrimitiveDot/> 02:00PM
</span>
</p>
</div>

  <div className="content-box">
<p className="content-today-big">
Adamu Garba just completed a task
<span className="content-today-small">
Fri, Nov 1st, 2022  <GoPrimitiveDot/> 09:00AM
</span>
</p>
</div>
</div>
    </section>
    
    )
}

export default Notification