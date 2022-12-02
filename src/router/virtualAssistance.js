import Home from "../components/userDasboardComponents/home/Home";
// import ChatBox from "../core/chatbox/ChatBox";
// import Client from "../components/va-clients/Client";
// import Notification from "../components/notification/Notification";
// import Notifications from "../pages/Notifications/Notifications";
// import VaProfile from "../components/VA-Profile/VaProfile";
//icons
import home from "../assets/icons/home.png";
import Client from "../components/va-clients/Client";
// import message from "../assets/icons/message.png";
// import task from "../assets/task.svg";
// import Task from "../components/task/Task";
// import clientIcon from "../assets/clientIcon.svg";
import notification from "../assets/notification.svg";
import setting from "../assets/setting.png";

// import profile from "../assets/profile-circle.svg";
// import Sub from "../core/sub/Sub";

export const virtualassistance = [
  { path: "", icon: home, title: "Home", component: Home },
  // {
  //   path: "notifications",
  //   icon: notification,
  //   title: "Notifications",
  //   component: Notifications
  // },
  {
    path: "clients",
    icon: notification,
    title: "clients",
    component: Client
  },
  {
    path: "setting",
    icon: setting,
    title: "Settings",
    component: Client
  }
];
