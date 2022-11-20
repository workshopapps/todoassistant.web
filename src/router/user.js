import Home from "../components/userDasboardComponents/home/Home";
import ChatBox from "../core/chatbox/ChatBox";

//icons
import home from "../assets/icons/home.png";
import message from "../assets/icons/message.png";
import task from "../assets/task.png";
import Task from "../components/task/Task";

export const userRoutes = [
  { path: "", icon: home, title: "Home", component: Home },
  { path: "chat", icon: message, title: "Assistant", component: ChatBox },
  { path: "task", icon: task, title: "Task", component: Task }
];
