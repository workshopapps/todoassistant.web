import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import ErrorBoundary from "./layout/error-boundary/ErrorBoundary";
import AccountPreferences from "./components/accountPreferences/account/AccountPreferences";
import ProPreferences from "./components/accountPreferences/pro/ProPreferences";
import PreferenceSettingEdit from "./components/PreferenceSetting/Preference";
import Signup from "./core/auth/signup/Signup";
import GeneralLoading from "./layout/general-loading/GeneralLoading";

import FAQ from "./pages/FAQ/FAQ";
import {
  About,
  Career,
  Contact,
  LandingPage,
  PrivatePolicy,
  HowItWorks
} from "./pages";
import Dasboard from "./components/dasboard/Dasboard";
import Home from "./components/userDasboardComponents/home/Home";
import ChatBox from "./core/chatbox/ChatBox";
import NewTask from "./core/todo/NewTask";
import CheckM from "./core/auth/checkMail/CheckM";
import Task from "./components/task/Task";
import Detail from "./components/details/Detail";
import Payment from "./core/payment/Payment";

import Client from "./components/va-clients/Client";
import Notification from "./components/notification/Notification";
import Notifications from "./pages/Notifications/Notifications";
import VaProfile from "./components/VA-Profile/VaProfile";
import VaModal1 from "./components/VA-modal/VaModal1";
// import Login from "./components/Login/Login";
import ErrorMain from "./components/404";
import SettingsProfile from "./core/settings/profile/SettingsProfile";
import Otp from "./core/auth/otp/Otp";
import Sub from "./core/sub/Sub";

import NewPassword from "./components/resetPassword and newPassword pages/NewPassword";
import ResetPassword from "./components/resetPassword and newPassword pages/ResetPassword";

import VaDasboard from "./components/vaDashboard/VaDasboard";
import LoginPage from "./core/auth/login/LoginPage";
import Login from "./components/Login/Login";

import { useContext } from "react";
import { AuthContext } from "./contexts/authContext/AuthContext";
import TaskDetails from "./core/todo/TaskDetials";
import EditAccountPage from "./components/accountSettingPages/account-setting-subpages/edit-account-page/EditAccountPage";
// import EditAccountPage from "./components/accountSettingPages/account-setting-subpages/edit-account-page/EditAccountPage";

function App() {
  const { user } = useContext(AuthContext);

  return (
    // <ErrorBoundary>
    <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<PrivatePolicy />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {user && (
          <>
            <Route path="/dashboard" element={<Dasboard />}>
              <Route path="" element={<Home />} />
              <Route path="assistant" element={<ChatBox />} />
              <Route path="task" element={<Task />}></Route>
              <Route path="detail" element={<Detail />} />
              <Route path="sub" element={<Sub />} />
              <Route path="clients" element={<Client />} />
              <Route path="notification" element={<Notification />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="payment" element={<Payment />} />
              <Route path="profile" element={<VaProfile />} />
            </Route>

            <Route path="/virtualassistance" element={<VaDasboard />}>
              <Route path="" element={<Home />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>

            <Route path="/newtask" element={<NewTask />} />
            <Route path="/edittask" element={<NewTask />} />
            <Route path="/taskdetails" element={<TaskDetails />} />
            <Route path="/va1" element={<VaModal1 />} />
            <Route path="/CheckM" element={<CheckM />} />
            <Route path="/settings/profile" element={<SettingsProfile />}>
              <Route path="edit" element={<EditAccountPage />} />
            </Route>

            <Route path="/account" element={<AccountPreferences />} />
            <Route path="/pro" element={<ProPreferences />} />
            <Route path="/account/edit" element={<PreferenceSettingEdit />} />

            {/* <Route path="/settings/profile" element={<SettingsProfile />} /> */}
          </>
        )}

        {/* 404-error handler */}
        {/* <Route path="*" element={<GeneralLoading text="PAGE NOT FOUND" />} /> */}
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Suspense>
    // </ErrorBoundary>
  );
}

export default App;
