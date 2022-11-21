import style from "./Preference.module.css";
import PrefSetForm from "./PreferenceSettingForm";
import Header from "../accountPreferences/Header";
import SideBar from "../accountPreferences/SideBar";

function PreferenceSettingEdit() {
  return (
    <div className={style.prefpage}>
      <SideBar />
      <div>
        <Header />
        <PrefSetForm />
      </div>
    </div>
  );
}

export default PreferenceSettingEdit;
