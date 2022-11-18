package callhandler

import (
	"encoding/json"
	"net/http"
	// "test-va/internals/entity/errorEntity"
	"test-va/internals/entity/callEntity"
)




func GetCalls(w http.ResponseWriter, r *http.Request) {

	var Calls []callEntity.CallRes
	
	w.Header().Set("content-Type", "application/json")
	json.NewEncoder(w).Encode(Calls)
}