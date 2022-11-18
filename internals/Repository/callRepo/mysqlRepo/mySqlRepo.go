package mySqlCallRepo

import (
	"context"
	"database/sql"
	"test-va/internals/Repository/callRepo"
	"test-va/internals/entity/callEntity"
)

type sqlRepo struct {
	conn *sql.DB
}

func NewSqlRepo(conn *sql.DB) callRepo.CallRepository {
	return &sqlRepo{conn: conn}
}

func (s *sqlRepo) GetCalls(ctx context.Context) ([]*callEntity.CallRes, error) {
	tx, err := s.conn.BeginTx(ctx, nil)
	if err != nil {
		return nil, err
	}

	defer func() {
		if err != nil {
			tx.Rollback()
		} else {
			tx.Commit()
		}
	}()

	query := "SELECT id, va_id, user_id, call_rating, call_comment FROM Calls"

	rows, err := tx.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	calls := []*callEntity.CallRes{}

	for rows.Next() {
		var call callEntity.CallRes
		err := rows.Scan(
			&call.CallId,
			&call.VaId,
			&call.UserId,
			&call.CallRating,
			&call.CallComment,
		)
		if err != nil {
			return nil, err
		}
		calls = append(calls, &call)
	}
	if rows.Err(); err != nil {
		return nil, err
	}
	return calls, nil
}