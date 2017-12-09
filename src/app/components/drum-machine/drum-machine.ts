import { Component, Input } from '@angular/core';

@Component({
  selector: 'drum-machine',
  templateUrl: './drum-machine.html',
  styleUrls: ['./drum-machine.scss']
})
export class DrumMachine {
  @Input() track = [];
}
