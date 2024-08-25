import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
  reset,
  undo,
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
    history: [...state.history, 0],
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
  })),
  on(undo, (state) => {
    const newHistory = state.history.slice(0, -1);
    return {
      ...state,
      history: newHistory,
    };
  })
);
