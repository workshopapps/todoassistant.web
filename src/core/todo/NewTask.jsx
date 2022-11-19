
import Form from "../../Components/NewTask/Form";
import Header from "../../Components/NewTask/Header";
import Sidebar from "../../Components/NewTask/Sidebar";
import "./NewTask.module.scss"



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
