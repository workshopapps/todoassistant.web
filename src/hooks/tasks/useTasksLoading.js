import { useContext, useEffect } from "react";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";

const useTasksLoading = () => {
  const { getTasks } = useContext(TaskCtx);

  useEffect(() => {
    getTasks();
  }, [getTasks]);
};

export default useTasksLoading;
