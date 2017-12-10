import { Component, Input } from '@angular/core';
import { BufferLoader } from '../../helpers/buffer-loader/buffer-loader';

@Component({
  selector: 'drum-machine',
  templateUrl: './drum-machine.html',
  styleUrls: ['./drum-machine.scss']
})
export class DrumMachine {
  @Input() track: any[] = [];
  public bpm: number = 120;
  public currentKickBeat: number = null;
  public currentSnareBeat: number = null;
  public currentOpenHatBeat: number = null;
  public currentClosedHatBeat: number = null;
  public playing: boolean = false;
  public paused: boolean = false;
  
  private audioBuffer: AudioBuffer;
  private audioContext;
  private currentBeat: number = null;
  private snareBuffer = null;
  private kickBuffer = null;
  private openHatBuffer = null;
  private closedHatBuffer = null;
  private timer: any = null;

  ngOnInit() {
    this.audioContext = new AudioContext();
    let bufferLoader = new BufferLoader(
        this.audioContext,
        [
          '../../assets/snare.wav',
          '../../assets/kick.wav',
          '../../assets/openHat.wav',
          '../../assets/closedHat.wav'
        ],
        (bufferList) => {
          this.snareBuffer = bufferList[0];
          this.kickBuffer = bufferList[1];
          this.openHatBuffer = bufferList[2];
          this.closedHatBuffer = bufferList[3];
        }
    );
    
    bufferLoader.load();
  }

  ngOnDestroy() {
    this.audioContext.close();
  }

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

      this.playBeat();
    }, (((60/this.bpm)*4)/this.track.length) * 1000);
  }

  public playSoundFromBuffer(bufferToPlay) {
    const sound = this.audioContext.createBufferSource();
    sound.buffer = bufferToPlay;
    sound.connect(this.audioContext.destination);
    sound.start(0);
  }

  public playBeat() {
    const currentBeatData = this.track[this.currentBeat];

    if (currentBeatData.snare) {
      this.currentSnareBeat = this.currentBeat;
      this.playSoundFromBuffer(this.snareBuffer);
    } else {
      this.currentSnareBeat = null;
    }

    if (currentBeatData.kick) {
      this.currentKickBeat = this.currentBeat;
      this.playSoundFromBuffer(this.kickBuffer);
    } else {
      this.currentKickBeat = null;
    }

    if (currentBeatData.openHat) {
      this.currentOpenHatBeat = this.currentBeat;
      this.playSoundFromBuffer(this.openHatBuffer);
    } else {
      this.currentOpenHatBeat = null;
    }
    
    if (currentBeatData.closedHat) {
      this.currentClosedHatBeat = this.currentBeat;
      this.playSoundFromBuffer(this.closedHatBuffer);
    } else {
      this.currentClosedHatBeat = null;
    }
  }

  public toggleSoundAtBeat(sound: string, index: number) {
    this.track[index][sound] = !this.track[index][sound];
  }

  public stop() {
    this.playing = false;
    this.paused = false;
    clearInterval(this.timer);
    this.currentBeat = null;
    this.currentKickBeat = null;
    this.currentSnareBeat = null;
    this.currentOpenHatBeat = null;
    this.currentClosedHatBeat = null;
  }
}
