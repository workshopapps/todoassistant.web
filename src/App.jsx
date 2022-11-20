import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./layout/error-boundary/ErrorBoundary";
import AccountPreferences from "./components/accountPreferences/AccountPreferences";
import PreferenceSettingEdit from "./components/PreferenceSetting/Preference";
import Signup from "./core/auth/signup/Signup";
import GeneralLoading from "./layout/general-loading/GeneralLoading";

import FAQ from "./pages/FAQ/FAQ";
import { About, Career, Contact, LandingPage, PrivatePolicy } from "./pages";
import Dasboard from "./components/dasboard/Dasboard";
import Home from "./components/userDasboardComponents/home/Home";
import ChatBox from "./core/chatbox/ChatBox";
import NewTask from "./core/todo/NewTask";
import CheckM from "./core/auth/checkMail/CheckM";
import Task from "./components/task/Task";
import Detail from "./components/details/Detail";
import Payment from "./core/payment/Payment"

import Client from './components/va-clients/Client'
import Notification from './components/notification/Notification'
import VaProfile from './components/VA-Profile/VaProfile';
import VaModal1 from './components/VA-modal/VaModal1';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/dashboard" element={<Dasboard />}>
            <Route path="" element={<Home />} />
            <Route path="chat" element={<ChatBox />} />
            <Route path="task" element={<Task />}></Route>
            <Route path="detail" element={<Detail />} />
            <Route path="clients" element={<Client />} />
            <Route path="notification" element={<Notification />} />
            <Route path="payment" element={<Payment />} />
            <Route path="profile" element={<VaProfile />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<PrivatePolicy />} />
          <Route path="/account" element={<AccountPreferences />} />
          <Route path="/account/edit" element={<PreferenceSettingEdit />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/va1" element={<VaModal1 />} />
          <Route path="/CheckM" element={<CheckM />} />

          <Route path="/faq" element={<FAQ />} />

          {/* 404-error handler */}
          <Route path="*" element={<GeneralLoading text="PAGE NOT FOUND" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
