import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { AppState } from '../models/app.state';
import { counterHistoryReducer } from './combined.history.reducers';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  counterHistory: counterHistoryReducer,
};

const rootReducer = combineReducers(reducers);

export function combinedReducer(
  state: AppState | undefined,
  action: any
): AppState {
  const initializedState: AppState = state || {
    counter: { count: 0, lastUpdated: null },
    counterHistory: { history: [] },
  };

  switch (action.type) {
    case '[Counter] Undo': {
      const history = initializedState.counterHistory.history;
      const previousCount = history[history.length - 2] || 0;
      return {
        ...initializedState,
        counter: {
          ...initializedState.counter,
          count: previousCount,
          lastUpdated: new Date(),
        },
        counterHistory: {
          ...initializedState.counterHistory,
          history: history.slice(0, -1),
        },
      };
    }
    default:
      return rootReducer(initializedState, action);
  }
}
