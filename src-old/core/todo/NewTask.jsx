import Form from "../../components/NewTask/Form";
import Header from "../../components/NewTask/Header";
import Sidebar from "../../components/NewTask/Sidebar";
import styles from "./NewTask.module.scss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

function NewTask() {
  const navigate = useNavigate();
  return (
    <div className={styles.newTaskBody}>
      <div className={styles.newTaskContainer}>
        <div className={styles.newTaskSidebar}>
          <Sidebar />
        </div>

        <main className={styles.mainContainer}>
          <HiOutlineArrowNarrowLeft
            className={styles.newTaskBack}
            onClick={() => {
              navigate(-1);
            }}
          />
          <Header heading="New Task" />
          <Form value={useLocation().state} />
        </main>
      </div>
    </div>
  );
}

export default NewTask;
