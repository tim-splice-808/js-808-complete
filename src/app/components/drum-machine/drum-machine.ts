import { Component, Input } from '@angular/core';
import { clearInterval, setInterval } from 'timers';

@Component({
  selector: 'drum-machine',
  templateUrl: './drum-machine.html',
  styleUrls: ['./drum-machine.scss']
})
export class DrumMachine {
  @Input() track: any[] = [];
  public bpm: number = 120;
  public currentBeat: number = null;
  public playing: boolean = false;
  public paused: boolean = false;
  private timer: any = null;

  constructor() {}

  public bpmChanged(bpm: number) {
    this.bpm = bpm;
    if (this.playing) {
      this.pause();
      this.play();
    }
  }

  public pause() {
    this.playing = false;
    this.paused = true;
    clearInterval(this.timer);
  }

  public play() {
    this.paused = false;
    this.playing = true;
    this.timer = setInterval(() => {
      if (this.currentBeat === null || this.currentBeat === this.track.length - 1) {
        this.currentBeat = 0;
      } else {
        this.currentBeat++;
      }
    }, (((60/this.bpm)*4)/this.track.length) * 1000);
  }

  public selectAtBeat(sound: string, index: number) {
    this.track[index][sound] = !this.track[index][sound];
  }

  public stop() {
    this.playing = false;
    this.paused = false;
    clearInterval(this.timer);
    this.currentBeat = null;
  }
}
