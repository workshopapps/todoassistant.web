import React, {useState} from "react";
import user from '../../assets/user-picture.svg' 
import classes from './RouteHeaders.module.scss';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const RouteHeaders = (props) => {
    const [selectOpen, setSelectOpen] = useState(false);

    const centerMarginLeft = `${ classes.center} ${classes.margin_left}`;

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

      
        </div>  
        </div>
    )
}

export default RouteHeaders