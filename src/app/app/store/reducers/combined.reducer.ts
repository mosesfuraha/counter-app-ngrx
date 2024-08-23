import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { AppState } from '../models/app.state';
import { counterHistoryReducer } from './combined.history.reducers';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  counterHistory: counterHistoryReducer,
};
