import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import ErrorBoundary from "./layout/error-boundary/ErrorBoundary";
import AccountPreferences from "./components/accountPreferences/account/AccountPreferences";
import ProPreferences from "./components/accountPreferences/pro/ProPreferences";
import PreferenceSettingEdit from "./components/PreferenceSetting/Preference";
// import Signup from "./core/auth/signup/Signup";
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
import UserDashboardlayout from "./components/dasboard/Dasboard";
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
// import Login from "./components/Login/UserLogin";
import VATasks from "./components/VAHome/VAHome";

import { useContext } from "react";
import { AuthContext } from "./contexts/authContext/AuthContext";
import TaskDetails from "./core/todo/TaskDetials";
import EditAccountPage from "./components/accountSettingPages/account-setting-subpages/edit-account-page/EditAccountPage";
import VaClientPage from "./core/dashboard/va-client-page/VaClientPage";
import VALogin from "./components/VA-Login/VALogin";
import Dashboardlayout from "./layout/dasboard-layout/Dashboardlayout";
import UserLogin from "./components/Login/UserLogin";
import { VAAuthContext } from "./contexts/VAContexts/AuthContext";

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
// import './messaging_init_in_sw';
// import axios from "axios";

// import Signup from "./core/auth/signup/Signup";
import OTPPage from "./components/ResetPasswordPages/otpPage/OTPPage";
import Signup from "./core/auth/signup/UserSignUp";
// import UserDashboardlayout from "./layout/dasboard-layout/user-dasboard/UserDashboardLayout";

function App() {
  // const [device_id, setDevice_Id] = useState(JSON.parse(localStorage.getItem("firebaseNotifToken")) || null);

  const { user } = useContext(AuthContext);
  const { VA } = useContext(VAAuthContext);

  // const location = useLocation();

  // const sendNotification = async () =>{
  //   const user_id = user.user_id;
  //   try {
  //     const response = await axios.post(
  //       'https://api.ticked.hng.tech/api/v1/notification',
  //       { user_id, device_id }
  //     );
  //     console.log(response);
  //     console.log(device_id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(()=>{
  //   if (user !== null){
  //     setDevice_Id(JSON.parse(localStorage.getItem("firebaseNotifToken")) || null);
  //    sendNotification();
  //   }
  // },[user, device_id]);

  // useEffect(() => {
  //   if (VA && location.pathname === "/va-login") {
  //     console.log(true);
  //     location.pathname.replace(/[^/]*$/, "/virtual-assistance/");
  //   }
  // }, [location.pathname]);

  return (
    <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
      {/* AUTH ROUTES */}
      <Routes>
        <Route
          path="/login"
          element={!user ? <UserLogin /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/dashboard" />} //conditional routing to signup
        />

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
        <Route path="/resetpassword" element={<MainResetPage />}>
          <Route path="" element={<ResetPasswordPage />} />
          <Route path="checkmail" element={<CheckMail />} />
          <Route path="otp" element={<OTPPage />} />
          <Route path="putnewpassword" element={<NewPasswordPage />} />
        </Route>

        {/* ================================ */}
        {/* USER ROUTES */}
        {/* ================================ */}
        <>
          <Route
            path="/dashboard"
            element={
              user ? <UserDashboardlayout /> : <Navigate to="/login" replace />
            }
          >
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

          <Route
            path="/newtask"
            element={user ? <NewTask /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/edittask"
            element={user ? <NewTask /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/taskdetails"
            element={user ? <TaskDetails /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/va1"
            element={user ? <VaModal1 /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/CheckM"
            element={user ? <CheckM /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/settings/profile"
            element={
              user ? <SettingsProfilee /> : <Navigate to="/login" replace />
            }
          >
            <Route
              path="edit"
              element={
                user ? <EditAccountPage /> : <Navigate to="/login" replace />
              }
            />
          </Route>

          <Route
            path="/account"
            element={
              user ? <AccountPreferences /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/pro"
            element={
              user ? <ProPreferences /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/account/edit"
            element={
              user ? (
                <PreferenceSettingEdit />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </>

        {/* =================================== */}
        {/* VA ROUTES */}
        {/* =================================== */}
        <>
          <Route
            path="/va-signup"
            element={
              !VA ? <VASignup /> : <Navigate to="/virtual-assistance/" />
            }
          />
          <Route
            path="/va-login"
            element={
              !VA ? <VALogin /> : <Navigate to="/virtual-assistance" replace />
            }
          />

          <Route
            path="/virtual-assistance"
            element={
              VA ? <Dashboardlayout /> : <Navigate to="/va-login" replace />
            }
          >
            <Route path="" element={<VADashboard />} />
            <Route path="clients" element={<VaClientPage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="tasks" element={<VATasks />} />
            {/* <Route path="notifications" element={<Notifications />} /> */}
            <Route path="profile" element={<VaProfile />} />
          </Route>
        </>
        {/* 404 PAGE NOT FOUND ROUTE */}
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </Suspense>
  );
}

export default App;
