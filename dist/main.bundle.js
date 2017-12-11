webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app--header\">\n  JS-808\n  <div class=\"app--track-selection\">\n    <select [(ngModel)]=\"selectedTrackIndex\">\n      <option *ngFor=\"let track of tracks; let i = index\" [ngValue]=\"i\">\n        Track {{ i + 1 }}\n      </option>\n    </select>\n  </div>\n</div>\n\n<drum-machine [track]=\"tracks[selectedTrackIndex]\"></drum-machine>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app--header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 2em;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 15px; }\n\n.app--track-selection {\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 19%; }\n  .app--track-selection select {\n    font-size: .6em;\n    font-weight: bold;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.selectedTrackIndex = 0;
        this.tracks = [];
        var track1 = [
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
        var track2 = [
            { kick: true, snare: false, openHat: false, closedHat: false },
            { kick: false, snare: false, openHat: false, closedHat: true },
            { kick: false, snare: true, openHat: false, closedHat: true },
            { kick: true, snare: false, openHat: false, closedHat: false },
            { kick: true, snare: false, openHat: false, closedHat: false },
            { kick: false, snare: false, openHat: false, closedHat: true },
            { kick: false, snare: true, openHat: false, closedHat: true },
            { kick: true, snare: false, openHat: true, closedHat: false }
        ];
        var track3 = [
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_drum_machine_drum_machine__ = __webpack_require__("../../../../../src/app/components/drum-machine/drum-machine.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_drum_machine_drum_machine__["a" /* DrumMachine */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/drum-machine/drum-machine.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"drum-machine--controls\">\n  <i class=\"material-icons\"\n     *ngIf=\"!playing || paused\"\n     (click)=\"play()\">\n    play_arrow\n  </i>\n  <i class=\"material-icons\"\n     *ngIf=\"playing && !paused\"\n     (click)=\"pause()\">\n    pause\n  </i>\n  <i class=\"material-icons stop-icon\"\n     (click)=\"stop()\">\n    stop\n  </i>\n  <input type=\"number\"\n         [ngModel]=\"bpm\"\n         (ngModelChange)=\"bpmChanged($event)\">\n  <span class=\"bpm-label\">\n    BPM\n  </span>\n</div>\n\n<div class=\"drum-machine\">\n  <div class=\"drum-machine--beat-title\"></div>\n  <h3>KICK</h3>\n  <h3>SNARE</h3>\n  <h3>OPEN HAT</h3>\n  <h3>CLOSED HAT</h3>\n  \n  <ng-container *ngFor=\"let beat of track; let i = index\">\n    <div class=\"drum-machine--beat-title\">{{ i + 1 }}</div>\n    <div [class.play]=\"currentKickBeat === i\"\n         (click)=\"toggleSoundAtBeat('kick', i)\">\n      {{ beat.kick ? '&#9679;' : null }}\n    </div>\n    <div [class.play]=\"currentSnareBeat === i\"\n         (click)=\"toggleSoundAtBeat('snare', i)\">\n      {{ beat.snare ? '&#9679;' : null }}\n    </div>\n    <div [class.play]=\"currentOpenHatBeat === i\"\n         (click)=\"toggleSoundAtBeat('openHat', i)\">\n      {{ beat.openHat ? '&#9679;' : null }}\n    </div>\n    <div [class.play]=\"currentClosedHatBeat === i\"\n         (click)=\"toggleSoundAtBeat('closedHat', i)\">\n      {{ beat.closedHat ? '&#9679;' : null }}\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/drum-machine/drum-machine.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drum-machine--controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-bottom: 10px; }\n  .drum-machine--controls .bpm-label {\n    -ms-flex-item-align: center;\n        align-self: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-weight: bold;\n    margin-left: 5px; }\n  .drum-machine--controls input {\n    border: black solid 1px;\n    font-size: 1em;\n    font-weight: bold;\n    width: 42px; }\n  .drum-machine--controls .material-icons {\n    border: black solid 1px;\n    cursor: pointer;\n    font-size: 2.2em; }\n    .drum-machine--controls .material-icons.stop-icon {\n      margin-right: 2px;\n      margin-left: 2px; }\n\n.drum-machine {\n  display: -ms-grid;\n  display: grid;\n  grid-auto-flow: column;\n  grid-row-gap: 1em;\n  -ms-grid-rows: 100% 1fr 1fr 1fr 1fr;\n      grid-template-rows: 100% 1fr 1fr 1fr 1fr; }\n  .drum-machine .drum-machine--beat-title {\n    -ms-flex-item-align: end;\n        -ms-grid-row-align: end;\n        align-self: end;\n    border-bottom: black solid 1px;\n    border-top: black solid 1px;\n    font-weight: bold;\n    height: 100%;\n    text-align: center;\n    padding-left: 1em; }\n  .drum-machine div:not(.drum-machine--beat-title) {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: black solid 1px;\n    color: black;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1.7em;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-left: .5em; }\n    .drum-machine div:not(.drum-machine--beat-title).play {\n      background: #ffe082; }\n  .drum-machine h3 {\n    text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drum-machine/drum-machine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrumMachine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_buffer_loader_buffer_loader__ = __webpack_require__("../../../../../src/app/helpers/buffer-loader/buffer-loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrumMachine = (function () {
    function DrumMachine() {
        this.track = [];
        this.bpm = 120;
        this.currentKickBeat = null;
        this.currentSnareBeat = null;
        this.currentOpenHatBeat = null;
        this.currentClosedHatBeat = null;
        this.playing = false;
        this.paused = false;
        this.currentBeat = null;
        this.snareBuffer = null;
        this.kickBuffer = null;
        this.openHatBuffer = null;
        this.closedHatBuffer = null;
        this.timer = null;
    }
    DrumMachine.prototype.ngOnInit = function () {
        var _this = this;
        this.audioContext = new AudioContext();
        var bufferLoader = new __WEBPACK_IMPORTED_MODULE_1__helpers_buffer_loader_buffer_loader__["a" /* BufferLoader */](this.audioContext, [
            '../../assets/snare.wav',
            '../../assets/kick.wav',
            '../../assets/openHat.wav',
            '../../assets/closedHat.wav'
        ], function (bufferList) {
            _this.snareBuffer = bufferList[0];
            _this.kickBuffer = bufferList[1];
            _this.openHatBuffer = bufferList[2];
            _this.closedHatBuffer = bufferList[3];
        });
        bufferLoader.load();
    };
    DrumMachine.prototype.ngOnDestroy = function () {
        this.audioContext.close();
    };
    DrumMachine.prototype.bpmChanged = function (bpm) {
        this.bpm = bpm;
        if (this.playing) {
            this.pause();
            this.play();
        }
    };
    DrumMachine.prototype.pause = function () {
        this.playing = false;
        this.paused = true;
        clearInterval(this.timer);
    };
    DrumMachine.prototype.play = function () {
        var _this = this;
        this.paused = false;
        this.playing = true;
        this.timer = setInterval(function () {
            if (_this.currentBeat === null || _this.currentBeat === _this.track.length - 1) {
                _this.currentBeat = 0;
            }
            else {
                _this.currentBeat++;
            }
            _this.playBeat();
        }, (((60 / this.bpm) * 4) / this.track.length) * 1000);
    };
    DrumMachine.prototype.playSoundFromBuffer = function (bufferToPlay) {
        var sound = this.audioContext.createBufferSource();
        sound.buffer = bufferToPlay;
        sound.connect(this.audioContext.destination);
        sound.start(0);
    };
    DrumMachine.prototype.playBeat = function () {
        var currentBeatData = this.track[this.currentBeat];
        if (currentBeatData.snare) {
            this.currentSnareBeat = this.currentBeat;
            this.playSoundFromBuffer(this.snareBuffer);
        }
        else {
            this.currentSnareBeat = null;
        }
        if (currentBeatData.kick) {
            this.currentKickBeat = this.currentBeat;
            this.playSoundFromBuffer(this.kickBuffer);
        }
        else {
            this.currentKickBeat = null;
        }
        if (currentBeatData.openHat) {
            this.currentOpenHatBeat = this.currentBeat;
            this.playSoundFromBuffer(this.openHatBuffer);
        }
        else {
            this.currentOpenHatBeat = null;
        }
        if (currentBeatData.closedHat) {
            this.currentClosedHatBeat = this.currentBeat;
            this.playSoundFromBuffer(this.closedHatBuffer);
        }
        else {
            this.currentClosedHatBeat = null;
        }
    };
    DrumMachine.prototype.toggleSoundAtBeat = function (sound, index) {
        this.track[index][sound] = !this.track[index][sound];
    };
    DrumMachine.prototype.stop = function () {
        this.playing = false;
        this.paused = false;
        clearInterval(this.timer);
        this.currentBeat = null;
        this.currentKickBeat = null;
        this.currentSnareBeat = null;
        this.currentOpenHatBeat = null;
        this.currentClosedHatBeat = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], DrumMachine.prototype, "track", void 0);
    DrumMachine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'drum-machine',
            template: __webpack_require__("../../../../../src/app/components/drum-machine/drum-machine.html"),
            styles: [__webpack_require__("../../../../../src/app/components/drum-machine/drum-machine.scss")]
        })
    ], DrumMachine);
    return DrumMachine;
}());



/***/ }),

/***/ "../../../../../src/app/helpers/buffer-loader/buffer-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BufferLoader; });
// taken from https://www.html5rocks.com/en/tutorials/webaudio/intro/#toc-abstract
function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
}
BufferLoader.prototype.loadBuffer = function (url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    var loader = this;
    request.onload = function () {
        // Asynchronously decode the audio file data in request.response
        loader.context.decodeAudioData(request.response, function (buffer) {
            if (!buffer) {
                alert('error decoding file data: ' + url);
                return;
            }
            loader.bufferList[index] = buffer;
            if (++loader.loadCount == loader.urlList.length)
                loader.onload(loader.bufferList);
        }, function (error) {
            console.error('decodeAudioData error', error);
        });
    };
    request.onerror = function () {
        alert('BufferLoader: XHR error');
    };
    request.send();
};
BufferLoader.prototype.load = function () {
    for (var i = 0; i < this.urlList.length; ++i)
        this.loadBuffer(this.urlList[i], i);
};



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map