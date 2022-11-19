import React from 'react';
import Moment from 'react-moment';
import classes from './NotificationItem.module.css';

const TaskType = {
    review: 'Review Pending Task',
    completed: 'Task Completed',
    overdue: 'Overdue Task'
}

const NotificationItem = (props) => {
    let circleBackground= '#1890FF';
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
<div className={`${classes.d_flex} ${classes.item_padding}`}>
    <div style={{backgroundColor: circleBackground}} className={classes.circularDiv} >
        {initials}
        </div> 
    <div className={classes.d_block}>
    <div style={{fontWeight: 'bold'}}>{props.taskType}</div>
    <div style={{color:'#707070', fontSize:'11px'}}>{props.description}</div>
        </div>
    <div>
    <Moment fromNow>{props.time}</Moment>
    </div>

</div>
)
}

export default NotificationItem