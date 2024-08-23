import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterControlsComponent } from './app/counter-controls/counter-controls.component';
import { CounterOutputComponent } from './app/counter-output/counter-output.component';
import { FormsModule } from '@angular/forms';
import { AppState } from './app/store/models/app.state';
import { counterReducer } from './app/store/actions/counter.actions';
import { counterHistoryReducer } from './app/store/reducers/combined.history.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app/store/reducers/combined.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot<AppState>(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
