import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
  reset,
} from '../store/actions/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  count$: Observable<number>;
  inputValue: number = 0;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  incrementByNumber() {
    this.store.dispatch(incrementByNumber({ value: this.inputValue }));
  }

  decrementByNumber() {
    this.store.dispatch(decrementByNumber({ value: this.inputValue }));
  }
}
