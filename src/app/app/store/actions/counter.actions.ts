import { createAction, props, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const undo = createAction('[Counter] Undo');

export const incrementByNumber = createAction(
  '[Counter] Increment By Number',
  props<{ value: number }>()
);

export const decrementByNumber = createAction(
  '[Counter] Decrement By Number',
  props<{ value: number }>()
);

export type CounterActions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof incrementByNumber>
  | ReturnType<typeof decrementByNumber>;

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0),
  on(incrementByNumber, (state, { value }) => state + value),
  on(decrementByNumber, (state, { value }) => state - value)
);

export function reducer(
  state: number | undefined,
  action: CounterActions
): number {
  return counterReducer(state, action);
}
