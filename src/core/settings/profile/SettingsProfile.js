import React from "react";
import ProfileNav from "../../../components/ProfileScreen/ProfileNav";
import ProfileScreen from "../../../components/ProfileScreen/ProfileScreen";
import ProfileSideBar from "../../../components/ProfileScreen/ProfileSideBar";

const SettingsProfile = () => {
  return (
    <div>
      <div>
        <ProfileSideBar />
        <ProfileNav />
        <ProfileScreen />
      </div>
    </div>
  );
};

export default SettingsProfile;
