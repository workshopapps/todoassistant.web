// import "./App.scss";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Career from "./pages/Career/Career";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/404/Error";
// import FAQ from "./pages/FAQ";
import PrivatePolicy from './pages/Privacy/PrivatePolicy';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
// import Account from "./layout/FAQ/Account/Account";
// import Task from "./layout/FAQ/Tasks/Tasks";
// import Premium from "./layout/FAQ/Premium/Premium";
import Dasboard from './Components/dasboard/Dasboard';
import Home from './Components/userDasboardComponents/home/Home';
import ChatBox from './core/chatbox/ChatBox';
import ResetPassword from "./Components/Reset Password/ResetPassword";
import NewPassword from "./Components/Reset Password/NewPassword";
import  Notifications from "./pages/Notifications/Notifications";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dasboard />} >
          {/* add your route here for Va dashboard */}
          <Route path="" element={<Home />} />
          <Route path="chat" element={<ChatBox />} />
        </Route>
        {/* <Route path="/faq" element={<FAQ />}>
          <Route index element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route path="tasks" element={<Task />} />
          <Route path="premium" element={<Premium />} />
        </Route> */}
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/policy' element={<PrivatePolicy />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
