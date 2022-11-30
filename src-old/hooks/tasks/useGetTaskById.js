import { useContext, useEffect } from "react";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
const useGetTaskById = id => {
  const { getTaskById } = useContext(TaskCtx);

  useEffect(() => {
    getTaskById(id);
  }, [getTaskById]);
};

export default useGetTaskById;
