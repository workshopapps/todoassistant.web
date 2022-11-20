
import Form from "../../components/NewTask/Form";
import Header from "../../components/NewTask/Header";
import Sidebar from "../../components/NewTask/Sidebar";
import "./NewTask.scss"

function NewTask() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <Form />
      </main>
    </div>

  );
}

export default NewTask;
