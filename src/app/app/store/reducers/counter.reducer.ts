import { createReducer, on } from '@ngrx/store';
import { CounterState } from '../models/app.state';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
  reset,
  undo,
} from '../actions/counter.actions';

const initialState: CounterState = {
  count: 0,
  lastUpdated: null,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    const newCount = state.count + 1;
    return {
      ...state,
      count: newCount,
      lastUpdated: new Date(),
    };
  }),
  on(decrement, (state) => {
    const newCount = state.count - 1;
    return {
      ...state,
      count: newCount,
      lastUpdated: new Date(),
    };
  }),
  on(reset, (state) => ({
    ...state,
    count: 0,
    lastUpdated: new Date(),
  })),
  on(incrementByNumber, (state, { value }) => {
    const newCount = state.count + value;
    return {
      ...state,
      count: newCount,
      lastUpdated: new Date(),
    };
  }),
  on(decrementByNumber, (state, { value }) => {
    const newCount = state.count - value;
    return {
      ...state,
      count: newCount,
      lastUpdated: new Date(),
    };
  })
  
);
