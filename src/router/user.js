import Home from "../components/userDasboardComponents/home/Home";
import ChatBox from "../core/chatbox/ChatBox";
// import Client from "../components/va-clients/Client";
// import Notification from "../components/notification/Notification";
// import Notifications from "../pages/Notifications/Notifications";
// import VaProfile from "../components/VA-Profile/VaProfile";
//icons
import home from "../assets/icons/home.png";
import message from "../assets/icons/message.png";
// import task from "../assets/task.svg";
// import Task from "../components/task/Task";
// import clientIcon from "../assets/clientIcon.svg";
// import notification from "../assets/notification.svg";
// import profile from "../assets/profile-circle.svg";
// import Sub from "../core/sub/Sub";

export const userRoutes = [
  { path: "", icon: home, title: "Home", component: Home },
  { path: "assistant", icon: message, title: "Assistant", component: ChatBox }
  // { path: "task", icon: task, title: "Task", component: Task },
  // { path: "clients", icon: clientIcon, title: "Clients", component: Client },
  // {
  //   path: "notification",
  //   icon: notification,
  //   title: "Notification",
  //   component: Notification
  // }
  // {
  //   path: "notifications",
  //   icon: notification,
  //   title: "Notifications",
  //   component: Notifications
  // }

  // { path: "profile", icon: profile, title: "Profile", component: VaProfile },
  // { path: "sub", icon: profile, title: "Subscription", component: Sub }
];
