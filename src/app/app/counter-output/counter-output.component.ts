import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ counter: { count: number } }>) {
    this.count$ = this.store
      .select('counter')
      .pipe(map((state) => state.count));
  }
}
