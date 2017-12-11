import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedTrackIndex = 0;
  public tracks = [];

  constructor() {
    const track1 = [
      { kick: true, snare: true, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: true, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: true, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: true, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: false, closedHat: true }
    ];

    const track2 = [
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: true, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: true, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: true, closedHat: false }
    ];

    const track3 = [
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: true, openHat: false, closedHat: false },
      { kick: true, snare: false, openHat: true, closedHat: false },
      { kick: true, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: false, snare: false, openHat: true, closedHat: false },
      { kick: true, snare: true, openHat: false, closedHat: false },
      { kick: true, snare: true, openHat: false, closedHat: false },
      { kick: false, snare: true, openHat: false, closedHat: false },
      { kick: false, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: false, closedHat: true },
      { kick: true, snare: false, openHat: false, closedHat: false },
      { kick: false, snare: true, openHat: false, closedHat: false },
      { kick: true, snare: false, openHat: true, closedHat: false },
      { kick: true, snare: false, openHat: false, closedHat: false }
    ];

    this.tracks = [track1, track2, track3];
  }
}
