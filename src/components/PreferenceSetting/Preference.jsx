import Header from "../accountPreferences/Header";
import Sidebar from "../NewTask/Sidebar";
import PrefSetForm from "./PreferenceSettingForm";
import style from "./Preference.module.css";

function PreferenceSettingEdit() {
  return (
    <div className={style.psf}>
      <Sidebar />
      <div className={style.preference}>
        <Header />
        <PrefSetForm />
      </div>
    </div>
  );
}

export default PreferenceSettingEdit;
