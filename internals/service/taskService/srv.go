package taskService

import (
	"context"
	"log"
	"test-va/internals/Repository/taskRepo"
	"test-va/internals/entity/errorEntity"
	"test-va/internals/entity/taskEntity"
	"test-va/internals/service/timeSrv"
	"time"

	"github.com/google/uuid"
)

type TaskService interface {
	PersistTask(req *taskEntity.CreateTaskReq) (*taskEntity.CreateTaskRes, *errorEntity.ErrorRes)
	SearchTask(title string) ( []*taskEntity.SearchTaskRes, *errorEntity.ErrorRes)
}


type taskSrv struct {
	repo    taskRepo.TaskRepository
	timeSrv timeSrv.TimeService

}

func (t taskSrv) PersistTask(req *taskEntity.CreateTaskReq) (*taskEntity.CreateTaskRes, *errorEntity.ErrorRes) {
	// create context of 1 minute
	ctx, cancelFunc := context.WithTimeout(context.TODO(), time.Minute*1)
	defer cancelFunc()
	// implement validation for struct

	//set time
	req.CreatedAt = t.timeSrv.CurrentTime().Format(time.RFC3339)
	//set id
	req.TaskId = uuid.New().String()
	// insert into db
	err := t.repo.Persist(ctx, req)
	if err != nil {
		log.Println(err)
		return nil, errorEntity.NewCustomError(500, "Error Saving to Database")
	}
	data := taskEntity.CreateTaskRes{
		TaskId:      req.TaskId,
		Title:       req.Title,
		Description: req.Description,
		StartTime:   req.StartTime,
		EndTime:     req.EndTime,
	}

	return &data, nil

}

func (t *taskSrv) SearchTask (title string) ( []*taskEntity.SearchTaskRes, *errorEntity.ErrorRes){
	// create context of 1 minute
	ctx, cancelFunc := context.WithTimeout(context.TODO(), time.Minute*1)
	defer cancelFunc()

	tasks, err := t.repo.SearchTasks(title, ctx)
	if err != nil {
		log.Println(err)
		return nil, errorEntity.NewCustomError(500, "Internal Server Error")
	}
	return tasks, nil
}

func NewTaskSrv(repo taskRepo.TaskRepository, timeSrv timeSrv.TimeService) TaskService {
	return &taskSrv{repo: repo, timeSrv: timeSrv}
}

