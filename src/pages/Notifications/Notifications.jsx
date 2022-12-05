// import NotificationItem from "./NotificationItem";
// import React  from 'react';
// import cssClasses from './Notifications.module.css';


// const TaskType = {
//     review: 'Review Pending Task',
//     completed: 'Task Completed',
//     overdue: 'Overdue Task'
// }

// const ReadAction = {
//     read: 'Read',
//     unread: 'Unread'
// }

// const tempDays = [
//     "TODAY","YESTERDAY"
// ]

// // const tabs = [
// //    { name : 'All', active:true},
// //    { name: 'Unread (2)',active:false},
// //    { name: 'Mark all as read'}
// // ]
// const NotificationList = [
//     {
//         taskType: TaskType.review,
//         description: 'Meditate for 20mins every weekday at 9am',
//         time: '1976-04-19T12:59-0500',
//         action: ReadAction.unread,
//         id:1
//     },
//     {
//         taskType: TaskType.completed,
//         description: 'HNG Task completed.',
//         time: '2022-11-19T12:59+0100',
//         action: ReadAction.unread,
//         id:2
//     },
//     {
//         taskType: TaskType.overdue,
//         description: 'Design system submission for 11am due,would you like to...',
//         time: '2022-11-19T20:59-0500',
//         action: ReadAction.read,
//         id:3
//     },
//     {
//         taskType: TaskType.completed,
//         description: 'HNG Task completed.',
//         time: '2022-11-20T12:59-0500',
//         action: ReadAction.read,
//         id:4
//     }
// ]


// const Notifications = () => {
// //   const [ value, setValue ] = useState(null)

//     // const handleChange = (val) => {
//     //         setValue(val.target.value)
//     // }

//     return (
//       <div className={cssClasses.padding}>
//        <RouteHeaders name="Notifications" user="Joseph A"/>
//        <div className={`${cssClasses.d_flex} ${cssClasses.justify_between} ${cssClasses.padding}`}>
//         {/* {tabs.map(tab => (
//             <div className={tab.active ? cssClasses.active: cssClasses.non_active} >
//                 {tab.name}
//             </div>
//         ))} */}
//        </div>

//         {NotificationList.map((notList,index) => (
//             <>
//             <div className={`${cssClasses.d_flex} ${cssClasses.justify_between} ${cssClasses.padding_10}`} >
//                 <span style={{fontWeight:'bold'}}>{tempDays[index]}</span>
//                 <span style={{fontWeight:'bold',marginRight:'1.5rem'}} className={cssClasses.red}>Clear all</span></div>
//             <NotificationItem key = {notList.id} taskType={notList.taskType}
//             action = {notList.action}
//             description={notList.description} time = {notList.time}/>
//             </>

//         ))}
//       </div>
//     );
//   };

// export default Notifications

import React, { useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import { requestForToken, onMessageListener  } from '../../firebaseNotification'

// import toast, { Toaster } from 'react-hot-toast';

import more from "../../assets/dashboard/more.png"
import overdue from "../../assets/dashboard/overdue.png"
import newtask from "../../assets/dashboard/newtask.png"

import todo from "../../assets/dashboard/todo.png"



const notification = [
    {
        title: "Overdue Task",
        time: "Nov 24th at 8:30 PM",
        image: more,
        name: "Utibe",
        content: "Design system submission for 11am due,would you like to...",
        bg: "linear-gradient(0deg, rgba(219, 0, 4, 0.11), rgba(219, 0, 4, 0.11)), #FFFFFF",
        icon:  overdue
    },
    {
        title: "New Client",
        time: "Nov 24th at 8:30 PM",
        image: more,
        name: "Peter",
        content: "You’ve been assigned to John Mark as your new client",
        bg: "linear-gradient(0deg, rgba(82, 196, 26, 0.11), rgba(82, 196, 26, 0.11)), #FFFFFF",
        icon: newtask
    },
    {
        title: "Todo Task",
        time: "Nov 24th at 8:30 PM",
        image: more,
        name: "Peter",
        content: "Design system submission for 11am due,would you like to...",
        bg: "linear-gradient(0deg, rgba(112, 112, 112, 0.11), rgba(112, 112, 112, 0.11)), #FFFFFF",
        icon: todo
    }
]

export default function Notifications() {
    const [ active, setActive ] = useState("All")
    const [vaNotification, setVaNotification] = useState({title: '', body: ''});

   
    // checking for new notification
    useEffect(() => {
        // if (vaNotification?.title ){
        //  notify()
        // }
      }, [vaNotification])

// Requesting for va permision to send notification
    requestForToken()

// Updating notification state on in-coming notification
    onMessageListener()
    .then((payload) => {
      setVaNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <Box maxWidth={"100vw"}>
        <Typography
        sx={{
            fontWeight: "700",
            color: "#2B363B",
            lineHeight: "20px"
        }}
        >
            Notifications
        </Typography>

        <Box mt={2} sx={{background: "#fff", padding: "30px 40px", borderRadius: "8px"}}>
            <Box sx={{display: "flex", justifyContent:  "space-between"}}>
                <Box sx={{display: "flex", gap: "30px", padding: "0px 30px"}}>
                    <Typography
                        sx={{
                            borderBottom: active === "All" ? "2px solid #714DD9" : null,
                            padding: "0px 20px",
                            cursor: "pointer",
                            color: active === "All" ? "#714DD9": null
                        }}
                        onClick={() => setActive("All")}
                    >
                        All
                    </Typography>
                    <Typography
                        sx={{
                            cursor: "pointer",
                            borderBottom: active === "Unread" ? "2px solid #714DD9" : null,
                            color: active === "Unread" ? "#714DD9": null

                        }}
                        onClick={() => setActive("Unread")}

                    >
                        Unread
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{color: "#714DD9"}}>Mark All as read</Typography>
                </Box>
            </Box>
            </Box>
        <Box mt={2} sx={{background: "#fff"}} p={2}>

            <Box sx={{display: "flex", justifyContent: "space-between", padding: {xs: "20px 10px", md: "0px 30px"}}}>
                <Typography sx={{fontSize: "12px"}}>2 UNREAD NOTIFICATIONS</Typography>
                <Typography sx={{fontSize: "12px", color: "#FF4D4F"}}>Clear all</Typography>

            </Box>
            {notification.map((item) => (

            <Box key={item.title} mt={1} p={1} sx={{ background: item.bg, borderRadius: "8px", padding: {xs: "20px 10px", md: "20px 50px"}}}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                   <Box sx={{display: "flex"}}>
                    <Box>
                        <img src={item.icon} alt={"icon"} />
                    </Box>
                        <Box ml={2}>
                        <Typography sx={{fontSize: "14px", fontWeight: "700"}} >{item.title}</Typography>
                        <Typography sx={{fontSize: "12px", fontWeight: "400"}}  component="span">{item.content}</Typography>
                        </Box>
                   </Box>
                   <Typography sx={{fontSize: "12px", fontWeight: "400"}} ml={2} component="span">{item.time}</Typography>

                </Box>
                {/* <Box>
                    <Typography sx={{fontSize: "14px", fontWeight: "700"}} component="span">{item.name}</Typography>
                    <Typography sx={{fontSize: "14px"}} ml={2} component="span">{item.content}</Typography>
                </Box> */}

            </Box>
            ))}
            {/* <Typography sx={{fontSize: "14px", fontWeight: "600", color: "#714DD9"}} p={2}>View All</Typography> */}
        </Box>
    </Box>
  )
}
