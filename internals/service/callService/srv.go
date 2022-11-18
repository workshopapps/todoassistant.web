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
type CallService interface{
	GetCalls() ([]*callEntity.CallRes, *errorEntity.ErrorRes)
}

type callSrv struct{
	repo callRepo.CallRepository
	timeSrv timeSrv.TimeService
}



func (t callSrv) GetCalls()([]*callEntity.CallRes, *errorEntity.ErrorRes) {
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

func NewCallSrv(repo callRepo.CallRepository, timeSrv timeSrv.TimeService) CallService {
	return &callSrv{repo: repo, timeSrv: timeSrv}
}
