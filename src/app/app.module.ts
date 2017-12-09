import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatSliderModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DrumMachine } from './components/drum-machine/drum-machine';


@NgModule({
  declarations: [
    AppComponent,
    DrumMachine
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
