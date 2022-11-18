import Home from '../Components/userDasboardComponents/home/Home'
import ChatBox from '../core/chatbox/ChatBox'

//icons
import home from '../assets/icons/home.png'
import message from '../assets/icons/message.png'


export  const userRoutes = [
  {path:  '', icon: home, title: 'Home', component: Home },
  {path:  'chat', icon: message, title: 'Assistant', component: ChatBox },

]

