package callhandler

import (
	"encoding/json"
	"net/http"
	"test-va/internals/service/callService"
)



type callHandler struct {
	srv callService.CallService
}

func NewTaskHandler(srv callService.CallService) *callHandler {
	return &callHandler{srv: srv}
}



func (t *callHandler) GetCalls(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")

	calls, errRes := t.srv.GetCalls()
	if errRes != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(errRes)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(calls)
}
