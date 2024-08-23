import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
  reset,
} from '../actions/counter.actions';
import { CounterHistoryState } from '../models/app.state';

const initialHistoryState: CounterHistoryState = {
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    history: [
      ...state.history,
      (state.history[state.history.length - 1] || 0) + 1,
    ],
  })),
  on(decrement, (state) => ({
    ...state,
    history: [
      ...state.history,
      (state.history[state.history.length - 1] || 0) - 1,
    ],
  })),
  on(reset, (state) => ({
    ...state,
    // Optionally add a reset marker or keep as is
  })),
  on(incrementByNumber, (state, { value }) => ({
    ...state,
    history: [
      ...state.history,
      (state.history[state.history.length - 1] || 0) + value,
    ],
  })),
  on(decrementByNumber, (state, { value }) => ({
    ...state,
    history: [
      ...state.history,
      (state.history[state.history.length - 1] || 0) - value,
    ],
  }))
);
