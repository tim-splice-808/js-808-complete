import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

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
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
