package taskHandler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"test-va/internals/entity/errorEntity"
	"test-va/internals/entity/taskEntity"
	"test-va/internals/service/taskService"
)

type taskHandler struct {
	srv taskService.TaskService
}

func NewTaskHandler(srv taskService.TaskService) *taskHandler {
	return &taskHandler{srv: srv}
}

func SearchTaskHandler(srv taskService.TaskService) *taskHandler {
	return &taskHandler{srv: srv}
}

func (t *taskHandler) CreateTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")
	var req taskEntity.CreateTaskReq

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(errorEntity.NewDecodingError())
		return
	}

	task, errRes := t.srv.PersistTask(&req)
	if errRes != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(errRes)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(task)

}

// handle search function
func (t *taskHandler) SearchTask (w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("content-type", "application/json")
	title := r.URL.Query().Get("title")

	//w.Write([]byte("This route returns all tasks in DB"))
	if title != ""{
		searchedTasks, errRes := t.srv.SearchTask(title)
		fmt.Println(searchedTasks)
		if errRes != nil {
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(errRes)
		return
		}
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(searchedTasks)
	}

}
