import React from "react";
import AccountPage from "../../../components/accountSettingPages/account-setting-subpages/account-page/AccountPage";
import ProfileNav from "../../../components/ProfileScreen/ProfileNav";
// import ProfileScreen from "../../../components/ProfileScreen/ProfileScreen";
import ProfileSideBar from "../../../components/ProfileScreen/ProfileSideBar";
import "./SettingsProfile.css";

const SettingsProfile = () => {
  return (
    <div>
      <div className="settingsprofile">
        <div className="settingsprofilesidebar">
          <ProfileSideBar />
        </div>
        <div className="settingsprofilecontent">
          <ProfileNav />
          <AccountPage />
          {/* <ProfileScreen /> */}
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
