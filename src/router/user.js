import Home from '../Components/userDasboardComponents/home/Home';
import ChatBox from '../core/chatbox/ChatBox';
import Notification from '../core/notification/Notification';

//icons
import home from '../assets/icons/home.png';
import message from '../assets/icons/message.png';
import notifications from '../assets/icons/notificationnotification .svg';

export const userRoutes = [
    { path: '', icon: home, title: 'Home', component: Home },
    {
        path: 'notifications',
        icon: notifications,
        title: 'Notifications',
        component: Notification,
    },
    { path: 'chat', icon: message, title: 'Assistant', component: ChatBox },
];
