import React, {useState} from "react";
import user from '../../assets/user-picture.svg' 
import classes from './RouteHeaders.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const RouteHeaders = (props) => {
    const [selectOpen, setSelectOpen] = useState(false);
    // const handleSelect = (event) => {
    //     setSelectOpen(!selectOpen);
    //     console.log(event)
    //     // console.log(event)
    // }
    const centerMarginLeft = `${ classes.center} ${classes.margin_left}`;
    // const dropdownOptions = [
    //     {
    //         'name':'Profile',
    //         'link':'profile'
    //     },
    //     {
    //         'name':'Settings',
    //         'link':'settings'
    //     },
    //     {
    //         'name':'Logout',
    //         'link':'logout'
    //     }
    // ];
    return(
        <div className={classes.header_wrap}>
        {props.name}  
      <div className={classes.header_right}>
      <img src={user} alt="ticked" />
      <span className={centerMarginLeft}>
      <button className={classes.icon_only} onClick={() => setSelectOpen(!selectOpen)}>
        <span className={classes.font14}>{props.user}</span>
            {selectOpen ? <FiChevronUp/> : <FiChevronDown/>}
        </button>
      </span>
     {/* {selectOpen ? 
     <div className={classes.dropDownBlock}>
        hello
     {dropdownOptions.map((option) => {
         <div
         key={option.link}
         onClick={handleSelect}
         className=''>
             {option.name}
         </div>
     })}
   </div>
:null}  */}
      
        </div>  
        </div>
    )
}

export default RouteHeaders