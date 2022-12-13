import { useContext, useEffect } from "react";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";

const useTasksLoading = () => {
  const {
    getTasks
    // , setTasks
  } = useContext(TaskCtx);

  useEffect(() => {
    getTasks();

    // return () => {
    //   setTasks([]);
    // };
  }, [getTasks]);
};

export default useTasksLoading;
