package taskEntity

type TaskFile struct {
	FileLink string `json:"file_link"`
	FileType string `json:"file_type"`
}

type CreateTaskReq struct {
	TaskId      string     `json:"task_id"`
	UserId      string     `json:"user_id" validate:"required"`
	Title       string     `json:"title" validate:"required"`
	Description string     `json:"description"`
	Files       []TaskFile `json:"files"`
	StartTime   string     `json:"start_time" validate:"required"`
	EndTime     string     `json:"end_time" validate:"required"`
	Status      string     `json:"status"`
	CreatedAt   string     `json:"created_at"`
	UpdatedAt   string     `json:"updated_at"`
}

type CreateTaskRes struct {
	TaskId      string `json:"task_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	StartTime   string `json:"start_time"`
	EndTime     string `json:"end_time"`
}

type GetPendingTasksRes struct {
	TaskId      string `json:"task_id"`
	UserId      string `json:"user_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	StartTime   string `json:"start_time"`
	EndTime     string `json:"end_time"`
	Status      string `json:"status"`
}

