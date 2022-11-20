import NotificationItem from "./NotificationItem";
import React  from 'react';
import cssClasses from './Notifications.module.css';


const TaskType = {
    review: 'Review Pending Task',
    completed: 'Task Completed',
    overdue: 'Overdue Task'
}

const ReadAction = {
    read: 'Read',
    unread: 'Unread'
}

const tempDays = [
    "TODAY","YESTERDAY"
]

// const tabs = [
//    { name : 'All', active:true},
//    { name: 'Unread (2)',active:false},
//    { name: 'Mark all as read'}
// ]
const NotificationList = [
    {
        taskType: TaskType.review,
        description: 'Meditate for 20mins every weekday at 9am',
        time: '1976-04-19T12:59-0500',
        action: ReadAction.unread,
        id:1
    },
    {
        taskType: TaskType.completed,
        description: 'HNG Task completed.',
        time: '2022-11-19T12:59+0100',
        action: ReadAction.unread,
        id:2
    },
    {
        taskType: TaskType.overdue,
        description: 'Design system submission for 11am due,would you like to...',
        time: '2022-11-19T20:59-0500',
        action: ReadAction.read,
        id:3
    },
    {
        taskType: TaskType.completed,
        description: 'HNG Task completed.',
        time: '2022-11-20T12:59-0500',
        action: ReadAction.read,
        id:4
    }
]


const Notifications = () => {
//   const [ value, setValue ] = useState(null)
     
    // const handleChange = (val) => {
    //         setValue(val.target.value)
    // }
      
    return (
      <div className={cssClasses.padding}>
       {/* <RouteHeaders name="Notifications" user="Joseph A"/> */}
       <div className={`${cssClasses.d_flex} ${cssClasses.justify_between} ${cssClasses.padding}`}>
        {/* {tabs.map(tab => (
            <div className={tab.active ? cssClasses.active: cssClasses.non_active} >
                {tab.name}
            </div>
        ))} */}
       </div>

        {NotificationList.map((notList,index) => (
            <>
            <div className={`${cssClasses.d_flex} ${cssClasses.justify_between} ${cssClasses.padding_10}`} >
                <span style={{fontWeight:'bold'}}>{tempDays[index]}</span>
                <span style={{fontWeight:'bold',marginRight:'1.5rem'}} className={cssClasses.red}>Clear all</span></div>
            <NotificationItem key = {notList.id} taskType={notList.taskType}
            action = {notList.action}
            description={notList.description} time = {notList.time}/>
            </>
            
        ))}
      </div>
    );
  };

export default Notifications