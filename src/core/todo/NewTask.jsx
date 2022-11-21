
import Form from "../../components/NewTask/Form";
import Header from "../../components/NewTask/Header";
import Sidebar from "../../components/NewTask/Sidebar";
import styles from "./NewTask.module.scss"

function NewTask() {
  return (
    <div className={ styles.newTaskBody }>
    <div className={styles.newTaskContainer}>
      <Sidebar />
        <main className={ styles.mainContainer }>
        <Header />
        <Form />
      </main>
    </div>
  </div>
  );
}

export default NewTask;
