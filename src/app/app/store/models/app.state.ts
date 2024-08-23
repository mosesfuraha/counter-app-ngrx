export interface CounterState {
  count: number;
  lastUpdated: Date | null;
}

export interface CounterHistoryState {
  history: number[];
}

export interface AppState {
  counter: CounterState;
  counterHistory: CounterHistoryState;
}
