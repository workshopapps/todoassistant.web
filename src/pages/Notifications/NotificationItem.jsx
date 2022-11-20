import React from 'react';
import Moment from 'react-moment';
import classes from './NotificationItem.module.css';

const TaskType = {
    review: 'Review Pending Task',
    completed: 'Task Completed',
    overdue: 'Overdue Task'
}

const ReadAction = {
    read: 'Read',
    unread: 'Unread'
}

const NotificationItem = (props) => {
    let circleBackground= '#1890FF';
    let whiteBackgroundGreyBorder = `${classes.white_background} ${classes.grey_border}`

    switch (props.taskType) {
        case TaskType.review:
            circleBackground = '#1890FF'
            break;
        case TaskType.completed:
            circleBackground = '#707070';
            break;
        case TaskType.overdue:
            circleBackground = '#714DD9'
            break;
        default:
            break;
    }
   
    const initials = props.taskType.charAt(0);
return (
<div className={`${props.action === ReadAction.unread ? classes.grey_background: whiteBackgroundGreyBorder} ${classes.border_radius} ${classes.d_flex} ${classes.justify_between} ${classes.item_padding} ${classes.item_margin}`}>
    
    <div className={classes.d_flex}>
     <div style={{backgroundColor: circleBackground}} className={classes.circularDiv} >
        {initials}
   
         </div>  
         <div className={`${classes.d_block} ${classes.small_margin}`}>
    <div style={{fontWeight: 'bold', fontSize:'14px'}}>{props.taskType}</div>
    <div style={{color:'#707070', fontSize:'11px'}}>{props.description}</div>
        </div> 
          </div> 
    
    <div style={{ fontSize:'14px',fontWeight:'bold'}} className={`${classes.dot5_margin_top} ${classes.desktopMarginRight}`}>
    <Moment fromNow>{props.time}</Moment>
    </div>

</div>
)
}

export default NotificationItem