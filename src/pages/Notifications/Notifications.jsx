import React from "react";
import RouteHeaders from "../../layout/routeHeaders/RouteHeaders";
import NotificationItem from "./NotificationItem";

const TaskType = {
    review: 'Review Pending Task',
    completed: 'Task Completed',
    overdue: 'Overdue Task'
}
const NotificationList = [
    {
        taskType: TaskType.review,
        description: 'Meditate for 20mins every weekday at 9am',
        time: '1976-04-19T12:59-0500',
        id:1
    },
    {
        taskType: TaskType.completed,
        description: 'HNG Task completed.',
        time: '2022-11-19T12:59+0100',
        id:1
    },
    {
        taskType: TaskType.overdue,
        description: 'Design system submission for 11am due,would you like to...',
        time: '2022-11-19T20:59-0500',
        id:1
    },
    {
        taskType: TaskType.completed,
        description: 'HNG Task completed.',
        time: '2022-10-19T12:59-0500',
        id:1
    }
]

const Notifications = () => {
    return (
      <div>
       <RouteHeaders name="Notifications" user="Joseph A"/>
        {NotificationList.map((notList) => (
            <NotificationItem key = {notList.id} taskType={notList.taskType}
            description={notList.description} time = {notList.time}/>
        ))}
      </div>
    );
  };

export default Notifications