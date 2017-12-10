import { TestBed, async } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { DrumMachine } from './drum-machine';
describe('DrumMachine', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DrumMachine);
    component = fixture.debugElement.componentInstance;
    component.track = [{
      kick: false,
      snare: false,
      openHat: false,
      closedHat: false
    }, {
      kick: false,
      snare: false,
      openHat: false,
      closedHat: false
    }, {
      kick: false,
      snare: false,
      openHat: false,
      closedHat: false
    }, {
      kick: false,
      snare: false,
      openHat: false,
      closedHat: false
    }];
  }));
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`defaults bpm to 120`, async(() => {
    expect(component.bpm).toBe(120);
  }));
  it(`sets state correctly when playing`, async(() => {
    component.play();
    fixture.detectChanges();
    expect(component.playing).toBe(true);
    expect(component.paused).toBe(false);
  }));
  it(`sets state correctly when paused`, async(() => {
    component.play();
    fixture.detectChanges();
    expect(component.playing).toBe(true);
    expect(component.paused).toBe(false);

    component.pause();
    fixture.detectChanges();
    expect(component.playing).toBe(false);
    expect(component.paused).toBe(true);
  }));
  it(`sets state correctly when stopped`, async(() => {
    component.play();
    fixture.detectChanges();
    expect(component.playing).toBe(true);
    expect(component.paused).toBe(false);

    component.stop();
    fixture.detectChanges();
    expect(component.playing).toBe(false);
    expect(component.paused).toBe(false);
    expect(component.currentBeat).toBe(null);
  }))
  it(`correctly toggles instrument sound`, async(() => {
    expect(component.track[0].snare).toBe(false);
    component.toggleSoundAtBeat('snare', 0);
    expect(component.track[0].snare).toBe(true);
  }))
});
