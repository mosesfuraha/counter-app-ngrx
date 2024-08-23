import { createReducer, on } from '@ngrx/store';
import { CounterState } from '../models/app.state';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
  reset,
} from '../actions/counter.actions';

const initialState: CounterState = {
  count: 0,
  lastUpdated: null,
  incrementHistory: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    lastUpdated: new Date(),
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count - 1,
    lastUpdated: new Date(),
  })),
  on(reset, (state) => ({
    ...initialState,
    lastUpdated: new Date(),
  })),
  on(incrementByNumber, (state, { value }) => ({
    ...state,
    count: state.count + value,
    lastUpdated: new Date(),
    incrementHistory: [...state.incrementHistory, value],
  })),
  on(decrementByNumber, (state, { value }) => ({
    ...state,
    count: state.count - value,
    lastUpdated: new Date(),
  }))
);
