import * as Sentry from "@sentry/react";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorBoundary from "./layout/error-boundary/ErrorBoundary";
import AccountPreferences from "./components/accountPreferences/account/AccountPreferences";
import ProPreferences from "./components/accountPreferences/pro/ProPreferences";
import PreferenceSettingEdit from "./components/PreferenceSetting/Preference";
import GeneralLoading from "./layout/general-loading/GeneralLoading";
import Ticked from "./pages/Ticked/Ticked";
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
import VASignup from "./components/va-signup/auth/signup/VASignup";
import ErrorMain from "./components/404";
import Otp from "./core/auth/otp/Otp";
import Sub from "./core/sub/Sub";
import NewPassword from "./components/resetPassword and newPassword pages/NewPassword";
import VADashboard from "./components/AssistantVA";
import Login from "./components/Login/UserLogin";
// import SignUp from "./core/auth/signup/UserSignUp";
import Signup from "./core/auth/signup/Signup";
import VATasks from "./components/VAHome/VAHome";
import TaskDetails from "./core/todo/TaskDetials";
import EditAccountPage from "./components/accountSettingPages/account-setting-subpages/edit-account-page/EditAccountPage";
import VaClientPage from "./core/dashboard/va-client-page/VaClientPage";
import VALogin from "./components/VA-Login/VALogin";
import Dashboardlayout from "./layout/dasboard-layout/Dashboardlayout";
import MainResetPage from "./components/ResetPasswordPages/MainPage/MainResetPage";
import CheckMail from "./components/ResetPasswordPages/CheckMail/CheckMail";
import NewPasswordPage from "./components/ResetPasswordPages/NewPasswordPage/NewPasswordPage";
import ResetPasswordPage from "./components/ResetPasswordPages/ResetPage/ResetPasswordPage";
//userProfile
import SettingsProfilee from "./core/settings/profile/SettingsProfile";
import Edit from "./core/settings/profile/Edit";
import ChangePassword from "./core/settings/profile/ChangePassword";
import Subscription from "./pages/Subscription/Subscription";
import Success from "./components/subscriptionPlan/ErrorPages/Success/Success";
import Cancel from "./components/subscriptionPlan/ErrorPages/Cancel/Cancel";
// import "./messaging_init_in_sw";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext/AuthContext";
import { VAAuthContext } from "./contexts/VAContexts/AuthContext";
// import axios from "axios";
import OTPPage from "./components/ResetPasswordPages/otpPage/OTPPage";

function App() {
  // const [device_id, setDevice_Id] = useState(
  //   JSON.parse(localStorage.getItem("firebaseNotifToken")) || null
  // );

  const { user } = useContext(AuthContext);
  const { VA } = useContext(VAAuthContext);

  const location = useLocation();

  // const sendNotification = async () => {
  //   const user_id = user.user_id;
  //   try {
  //     const response = await axios.post(
  //       "https://api.ticked.hng.tech/api/v1/notification",
  //       { user_id, device_id }
  //     );
  //     console.log(response);
  //     console.log(device_id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (user !== null) {
  //     setDevice_Id(
  //       JSON.parse(localStorage.getItem("firebaseNotifToken")) || null
  //     );
  //     sendNotification();
  //   }
  // }, [user, device_id]);

  useEffect(() => {
    if (VA && location.pathname === "/va-login") {
      console.log(true);
      location.pathname.replace(/[^/]*$/, "/virtual-assistance/");
    }
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
        <Routes>
          {/* external pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/policy" element={<PrivatePolicy />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/marketing" element={<Ticked />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/newpassword" element={<NewPassword />} />
          {/* reset password nested route */}
          <Route path="/resetpassword" element={<MainResetPage />}>
            <Route path="" element={<ResetPasswordPage />} />
            <Route path="checkmail" element={<CheckMail />} />
            <Route path="otp" element={<OTPPage />} />
            <Route path="putnewpassword" element={<NewPasswordPage />} />
          </Route>
          {/* user authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* VA authentication */}
          <Route path="/va-login" element={<VALogin />} />
          <Route path="/va-signup" element={<VASignup />} />

          {/* ============================ */}
          {/* USER PROTECTED ROUTES */}
          {/* =============================*/}
          {user ? (
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
                <Route path="profile" element={<SettingsProfilee />} />
                <Route path="profile/edit" element={<Edit />} />
                <Route
                  path="profile/change-password"
                  element={<ChangePassword />}
                />
              </Route>

              <Route path="/newtask" element={<NewTask />} />
              <Route path="/edittask" element={<NewTask />} />
              <Route path="/taskdetails" element={<TaskDetails />} />
              <Route path="/va1" element={<VaModal1 />} />
              <Route path="/CheckM" element={<CheckM />} />
              <Route path="/settings/profile" element={<SettingsProfilee />}>
                <Route path="edit" element={<EditAccountPage />} />
              </Route>

              <Route path="/account" element={<AccountPreferences />} />
              <Route path="/pro" element={<ProPreferences />} />
              <Route path="/account/edit" element={<PreferenceSettingEdit />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Login />}>
                <Route path="" element={<Login />} />
                <Route path="assistant" element={<Login />} />
                <Route path="task" element={<Login />}></Route>
                <Route path="detail" element={<Login />} />
                <Route path="sub" element={<Login />} />
                <Route path="clients" element={<Login />} />
                <Route path="notification" element={<Login />} />
                <Route path="notifications" element={<Login />} />
                <Route path="payment" element={<Login />} />
                <Route path="profile" element={<SettingsProfilee />} />
              </Route>

              <Route path="/newtask" element={<Login />} />
              <Route path="/edittask" element={<Login />} />
              <Route path="/taskdetails" element={<Login />} />
              <Route path="/va1" element={<Login />} />
              <Route path="/CheckM" element={<Login />} />
              <Route path="/settings/profile" element={<Login />}>
                <Route path="edit" element={<Login />} />
              </Route>

              <Route path="/account" element={<Login />} />
              <Route path="/pro" element={<Login />} />
              <Route path="/account/edit" element={<Login />} />
            </>
          )}
          {/* ============================ */}
          {/* END USER PROTECTED ROUTES */}
          {/* =============================*/}

          {/* ============================ */}
          {/* VA PROTECTED ROUTES */}
          {/* =============================*/}
          {VA ? (
            <>
              <Route path="/virtual-assistance/" element={<Dashboardlayout />}>
                <Route path="" element={<VADashboard />} />
                <Route path="clients" element={<VaClientPage />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="tasks" element={<VATasks />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<VaProfile />} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/va-login" element={<VALogin />} />
              <Route path="/virtual-assistance" element={<VALogin />}>
                <Route path="" element={<VALogin />} />
                <Route path="tasks" element={<VATasks />} />
                <Route path="clients" element={<VALogin />} />
                <Route path="notifications" element={<VALogin />} />
                <Route path="profile" element={<VaProfile />} />
              </Route>
            </>
          )}

          {/* ============================ */}
          {/* END OF VA PROTECTED ROUTES */}
          {/* =============================*/}

          {/* 404 page not found */}
          <Route path="*" element={<ErrorMain />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
