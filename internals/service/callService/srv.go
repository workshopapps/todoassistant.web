package callService

import (
	"context"
	"log"
	"test-va/internals/Repository/callRepo"
	"test-va/internals/entity/callEntity"
	"test-va/internals/entity/errorEntity"
	"test-va/internals/service/timeSrv"
	"time"
)
type callService interface{
	GetCalls(ctx context.Context) ([]*callEntity.CallRes, error)
}

type callSrv struct{
	repo callRepo.CallRepository
	timeSrv timeSrv.TimeService
}



func (t callSrv) GetCalls(userId string) ([]*callEntity.CallRes, *errorEntity.ErrorRes) {
	// create context of 1 minute
	ctx, cancelFunc := context.WithTimeout(context.TODO(), time.Minute*1)
	defer cancelFunc()

	calls, err := t.repo.GetCalls(ctx)
	if err != nil {
		log.Println(err)
		return nil, errorEntity.NewCustomError(500, "Internal Server Error")
	}
	return calls, nil
}

// func NewCallSrv(repo callRepo.CallRepository, timeSrv timeSrv.TimeService) callService {
// 	return &callSrv{repo: repo, timeSrv: timeSrv}
// }
