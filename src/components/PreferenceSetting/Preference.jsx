import Header from "../accountPreferences/Header";
import Sidebar from "../NewTask/Sidebar";
// import PrefSetForm from "./PreferenceSettingForm";
import style from "./Preference.module.scss";
import PreferencePage from "../accountSettingPages/preferencePage/PreferencePage";

function PreferenceSettingEdit() {
  return (
    <div className={style.psf}>
      <Sidebar />
      <div className={style.preference}>
        <Header />
        <PreferencePage />
        {/* <PrefSetForm /> */}
      </div>
    </div>
  );
}

export default PreferenceSettingEdit;
