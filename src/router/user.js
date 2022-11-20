import Home from "../components/userDasboardComponents/home/Home";
import ChatBox from "../core/chatbox/ChatBox";
import Client from '../components/va-clients/Client';
import Notification from '../components/notification/Notification';
//icons
import home from "../assets/icons/home.png";
import message from "../assets/icons/message.png";
import task from "../assets/task.svg";
import Task from "../components/task/Task";
import clientIcon from '../assets/clientIcon.svg';
import notification from '../assets/notification.svg';
export const userRoutes = [
  { path: "", icon: home, title: "Home", component: Home },
  { path: "chat", icon: message, title: "Assistant", component: ChatBox },
  { path: "task", icon: task, title: "Task", component: Task }, 
  { path: "clients", icon: clientIcon, title: "Clients", component: Client},
    { path: "notification", icon: notification, title: "Notification", component: Notification},
]
