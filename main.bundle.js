webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(164),
        styles: [__webpack_require__(161)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_select_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__weather_convertTemp_pipe__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__weather_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__select_select_component__["a" /* SelectComponent */] },
    { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__["a" /* WeatherComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__select_select_component__["a" /* SelectComponent */],
            __WEBPACK_IMPORTED_MODULE_8__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_9__weather_convertTemp_pipe__["a" /* ConvertTempPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__weather_service__["a" /* WeatherService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = (function () {
    function SelectComponent(weatherService, router) {
        this.weatherService = weatherService;
        this.router = router;
    }
    SelectComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    SelectComponent.prototype.getWeatherByCityName = function () {
        var _this = this;
        this.weatherService.getCurrentWeatherByCityName(this.selectedCity)
            .subscribe(function (weather) {
            localStorage.setItem('weather', JSON.stringify(weather));
            _this.weatherService.getForecastByCityName(_this.selectedCity)
                .subscribe(function (forecast) {
                localStorage.setItem('forecast', JSON.stringify(forecast));
                _this.weatherService.getTimezoneforCity(forecast.city.coord.lat, forecast.city.coord.lon)
                    .subscribe(function (timezone) {
                    localStorage.setItem('timezoneOffset', timezone.rawOffset);
                    localStorage.setItem('loaded', JSON.stringify(false));
                    _this.router.navigate(['/weather']);
                });
            });
        });
    };
    SelectComponent.prototype.getWeatherByCoords = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (loc) {
            _this.latitude = loc.coords.latitude;
            _this.longitude = loc.coords.longitude;
            _this.weatherService.getCurrentWeatherByCoordinates(_this.latitude, _this.longitude)
                .subscribe(function (weather) {
                localStorage.setItem('weather', JSON.stringify(weather));
                _this.weatherService.getForecastByCoordinates(_this.latitude, _this.longitude)
                    .subscribe(function (forecast) {
                    localStorage.setItem('forecast', JSON.stringify(forecast));
                    localStorage.setItem('loaded', JSON.stringify(false));
                    _this.router.navigate(['/weather']);
                });
            });
        });
    };
    return SelectComponent;
}());
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-select',
        template: __webpack_require__(165),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SelectComponent);

var _a, _b;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertTempPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertTempPipe = (function () {
    function ConvertTempPipe() {
    }
    ConvertTempPipe.prototype.transform = function (value) {
        return Math.round(value * 1.8 + 32);
    };
    return ConvertTempPipe;
}());
ConvertTempPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertTemp'
    })
], ConvertTempPipe);

//# sourceMappingURL=convertTemp.pipe.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_svgMapping__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherComponent = (function () {
    function WeatherComponent(weatherService, router) {
        this.weatherService = weatherService;
        this.router = router;
        this.currentCity = {
            name: '',
            currentDate: new Date(),
            currentTemperature: null,
            currentWeather: '',
            iconPath: '',
            forecastForDay: [],
            forecastForWeek: []
        };
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('weather')) {
            this.getCurrentCityData();
            if (localStorage.getItem('loaded') === 'true') {
                if (localStorage.getItem('timezoneOffset')) {
                    this.refreshDataByCityName();
                }
                else {
                    this.refreshDataByCoordinates();
                }
            }
            setInterval(function () {
                if (localStorage.getItem('timezoneOffset')) {
                    _this.refreshDataByCityName();
                }
                else {
                    _this.refreshDataByCoordinates();
                }
            }, 900000);
        }
        else {
            this.router.navigate(['/']);
        }
        localStorage.setItem('loaded', JSON.stringify(true));
    };
    WeatherComponent.prototype.getCurrentCityData = function () {
        this.currentCity.name = JSON.parse(localStorage.getItem('weather')).name;
        var d = new Date();
        var offset = this.getTimezoneOffsetHour();
        var utc = d.getTime() + d.getTimezoneOffset() * 6000;
        this.currentCity.currentDate = new Date(utc + (3600000 * offset));
        this.currentCity.currentTemperature = Math.round(JSON.parse(localStorage.getItem('weather')).main.temp);
        this.currentCity.currentWeather = JSON.parse(localStorage.getItem('weather')).weather[0].description;
        this.currentCity.iconPath = __WEBPACK_IMPORTED_MODULE_3__config_svgMapping__["a" /* svgMapping */][JSON.parse(localStorage.getItem('weather')).weather[0].main] + '.svg'; //'assets/svg/' + 
        this.getForecastsForDay();
        this.getForecastForWeek();
    };
    WeatherComponent.prototype.getForecastsForDay = function () {
        this.currentCity.forecastForDay = [];
        for (var i = 1; i < 8; i = i + 2) {
            var localHours = this.getLocalTimeForParticularForecast(i)[0];
            var forecast = this.getLocalTimeForParticularForecast(i)[1];
            if (localHours >= 6 && localHours <= 11) {
                this.currentCity.forecastForDay.push({ timeOfDay: 'Morning', temperature: Math.round(forecast.main.temp) });
            }
            else if (localHours >= 12 && localHours <= 17) {
                this.currentCity.forecastForDay.push({ timeOfDay: 'Day', temperature: Math.round(forecast.main.temp) });
            }
            else if (localHours >= 18 && localHours <= 23) {
                this.currentCity.forecastForDay.push({ timeOfDay: 'Evening', temperature: Math.round(forecast.main.temp) });
            }
            else {
                this.currentCity.forecastForDay.push({ timeOfDay: 'Night', temperature: Math.round(forecast.main.temp) });
            }
        }
    };
    WeatherComponent.prototype.getForecastForWeek = function () {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var hoursOfFirstForecast = this.getLocalTimeForParticularForecast(0)[0];
        var firstForecastToBePushedIndex;
        for (var i = 0; i < 8; i++) {
            if (i <= 4) {
                if (hoursOfFirstForecast >= (13 - i * 3) && hoursOfFirstForecast <= (15 - i * 3)) {
                    firstForecastToBePushedIndex = i;
                }
            }
            else if (i === 5) {
                if (hoursOfFirstForecast === 22 || hoursOfFirstForecast === 23 || hoursOfFirstForecast === 0) {
                    firstForecastToBePushedIndex = i;
                }
            }
            else if (i === 6) {
                if (hoursOfFirstForecast === 19 || hoursOfFirstForecast === 20 || hoursOfFirstForecast === 21) {
                    firstForecastToBePushedIndex = i;
                }
            }
            else {
                if (hoursOfFirstForecast === 16 || hoursOfFirstForecast === 17 || hoursOfFirstForecast === 18) {
                    firstForecastToBePushedIndex = i;
                }
            }
        }
        this.currentCity.forecastForWeek = [];
        for (var i = firstForecastToBePushedIndex; i < 40; i = i + 8) {
            var nextDayOfWeekIndex = this.getLocalTimeForParticularForecast(i)[2].getDay();
            var nextDayForecast = this.getLocalTimeForParticularForecast(i)[1];
            this.currentCity.forecastForWeek.push({ dayOfWeek: days[nextDayOfWeekIndex], temperature: Math.round(nextDayForecast.main.temp) });
        }
    };
    WeatherComponent.prototype.getLocalTimeForParticularForecast = function (i) {
        var forecast = JSON.parse(localStorage.getItem('forecast')).list[i];
        var timestamp = forecast.dt;
        var localDate = new Date((timestamp + this.getTimezoneOffsetHour() * 3600) * 1000);
        var localHours = localDate.getUTCHours();
        return [localHours, forecast, localDate];
    };
    WeatherComponent.prototype.getTimezoneOffsetHour = function () {
        if (localStorage.getItem('timezoneOffset')) {
            return JSON.parse(localStorage.getItem('timezoneOffset')) / 3600; // nr of hours offset of UTC time
        }
        else {
            var time = new Date();
            var timezoneOffset = time.getTimezoneOffset() / -60; // nr of hours offset of UTC time
            return timezoneOffset;
        }
    };
    WeatherComponent.prototype.refreshDataByCityName = function () {
        var _this = this;
        this.weatherService.getCurrentWeatherByCityName(this.currentCity.name)
            .subscribe(function (weather) {
            localStorage.setItem('weather', JSON.stringify(weather));
            _this.weatherService.getForecastByCityName(_this.currentCity.name)
                .subscribe(function (forecast) {
                localStorage.setItem('forecast', JSON.stringify(forecast));
                _this.weatherService.getTimezoneforCity(forecast.city.coord.lat, forecast.city.coord.lon)
                    .subscribe(function (timezone) {
                    localStorage.setItem('timezoneOffset', timezone.rawOffset);
                    _this.getCurrentCityData();
                });
            });
        });
    };
    WeatherComponent.prototype.refreshDataByCoordinates = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (loc) {
            _this.weatherService.getCurrentWeatherByCoordinates(loc.coords.latitude, loc.coords.longitude)
                .subscribe(function (weather) {
                localStorage.setItem('weather', JSON.stringify(weather));
                _this.weatherService.getForecastByCoordinates(loc.coords.latitude, loc.coords.longitude)
                    .subscribe(function (forecast) {
                    localStorage.setItem('forecast', JSON.stringify(forecast));
                    _this.getCurrentCityData();
                });
            });
        });
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-weather',
        template: __webpack_require__(166),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__weather_service__["a" /* WeatherService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], WeatherComponent);

var _a, _b;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiUrl: 'https://api.openweathermap.org/data/2.5/',
    apiKey: 'e7cb6d3c3a5c4e0732f26c80f95d4dff',
    corsFix: 'https://cors-anywhere.herokuapp.com/',
    GoogleApiUrl: 'https://maps.googleapis.com/maps/api/timezone/json',
    GoogleApiKey: 'AIzaSyBv9jRhZvdBuJXLPmLs6Hf2aBXe4RpyOv0'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return svgMapping; });
var svgMapping = {
    'Rain': 'wi-rain',
    'Snow': 'wi-snow',
    'Mist': 'wi-fog',
    'Thunderstorm': 'wi-storm-showers',
    'Clear': 'wi-day-sunny',
    'Clouds': 'wi-cloud',
    'Drizzle': 'wi-rain'
};
//# sourceMappingURL=svgMapping.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".c-select {\n  position: relative;\n  height: 100%;\n}\n.c-select__form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 70%;\n}\n.c-select__input {\n  border-bottom: 3px solid #5f5d5d;\n}\n.c-select__text {\n  min-height: 30px;\n  width: 100%;\n  border: 0;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n}\n.c-select__text:focus {\n  outline-width: 0;\n}\n.c-select__button {\n  border: none;\n  background: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  outline-width: 0;\n}\n.c-select__search {\n  font-size: 34px;\n}\n.c-select__separate__word {\n  display: block;\n  margin: 12px auto;\n  width: 20px;\n}\n.c-select__separate__line {\n  display: block;\n  margin: 12px auto;\n  width: 190px;\n  font-size: 18px;\n}\n.c-select__coords {\n  border-bottom: 1px dotted #5f5d5d;\n  cursor: pointer;\n}\n@media (max-width: 359px) {\n  .c-select__text {\n    text-align: left;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".c-weather__header {\n  height: 75px;\n  margin: 20px;\n  position: relative;\n}\n.c-weather__arrow {\n  font-size: 34px;\n  position: relative;\n  top: 6px;\n  cursor: pointer;\n  outline-width: 0;\n}\n.c-weather__city {\n  font-size: 34px;\n  display: inline-block;\n  margin: 0 0 0 20px;\n}\n.c-weather__toggle {\n  position: absolute;\n  right: 0;\n  top: 8px;\n}\n.c-weather__label {\n  position: relative;\n  width: 79px;\n  height: 26px;\n  display: inline-block;\n  cursor: pointer;\n}\n.c-weather__label input {\n  display: none;\n}\n.c-weather__label input:checked + .c-weather__slider:after {\n  content: \"\\B0  F\";\n  left: 16px;\n  transition: 0.5s;\n}\n.c-weather__label input:checked + .c-weather__slider:before {\n  -webkit-transform: translate(52px);\n          transform: translate(52px);\n}\n.c-weather__slider {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid #5f5d5d;\n  border-radius: 15px;\n}\n.c-weather__slider:before {\n  position: absolute;\n  content: \"\";\n  border: 1px solid #5f5d5d;\n  background-color: #fff;\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  transition: 0.5s;\n}\n.c-weather__slider:after {\n  position: absolute;\n  content: \"\\B0  C\";\n  font-size: 13px;\n  font-weight: bold;\n  top: 5px;\n  left: 52px;\n  color: #5f5d5d;\n  transition: 0.5s;\n}\n.c-weather__main {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 55% 45%;\n      grid-template-columns: 55% 45%;\n  -ms-grid-rows: 90px 140px;\n      grid-template-rows: 90px 140px;\n  height: 230px;\n  margin: 20px;\n  position: relative;\n  padding-left: 5px;\n}\n.c-weather__main .currentWeather {\n  grid-column: 1/2;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% 50%;\n      grid-template-columns: 50% 50%;\n  -ms-grid-rows: 140px;\n      grid-template-rows: 140px;\n}\n.c-weather__main .todaysForecast {\n  padding: 20px;\n}\n.c-weather__main h2 {\n  font-size: 36px;\n  font-weight: normal;\n  margin: 7px 0;\n}\n.c-weather__main h3 {\n  font-size: 30px;\n  font-weight: normal;\n  text-transform: capitalize;\n  margin: 7px 0;\n}\n.c-weather__main p {\n  font-size: 18px;\n  width: 140px;\n  position: relative;\n  margin: 6px;\n}\n.c-weather__main p span {\n  color: #ff8566;\n}\n.c-weather__main p .alignRight {\n  position: absolute;\n  right: 0;\n  color: #ff8566;\n}\n.c-weather__currentTemp {\n  font-size: 100px;\n  font-weight: bold;\n  color: #ff8566;\n  padding: 16px;\n}\n.c-weather__forecast {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 20% 20% 20% 20% 20%;\n      grid-template-columns: 20% 20% 20% 20% 20%;\n  text-align: center;\n}\n.c-weather__forecast p {\n  margin: 4px;\n  font-size: 14px;\n}\n.c-weather__forecast .c-weather__forecastImg {\n  width: 30%;\n  height: auto;\n}\n.c-weather__bigImg {\n  width: 150px;\n  height: auto;\n}\n@media (max-width: 1279px) {\n  .c-weather__main {\n    height: 330px;\n    -ms-grid-columns: 65% 35%;\n        grid-template-columns: 65% 35%;\n    -ms-grid-rows: 160px 170px;\n        grid-template-rows: 160px 170px;\n  }\n  .c-weather__main .headings {\n    padding-top: 30px;\n  }\n}\n@media (max-width: 959px) {\n  .c-weather__main {\n    height: 430px;\n    -ms-grid-columns: 45% 55%;\n        grid-template-columns: 45% 55%;\n    -ms-grid-rows: 120px 210px;\n        grid-template-rows: 120px 210px;\n    margin: 10px;\n  }\n  .c-weather__main .headings {\n    grid-column: 1/3;\n    padding: 25px 0 0 16px;\n  }\n  .c-weather__main .currentWeather {\n    -ms-grid-columns: 100%;\n        grid-template-columns: 100%;\n    -ms-grid-rows: 110px;\n        grid-template-rows: 110px;\n  }\n  .c-weather__main .todaysForecast p {\n    font-size: 28px;\n    width: 200px;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 599px) {\n  .c-weather__header {\n    height: 40px;\n  }\n  .c-weather__main {\n    height: 240px;\n    -ms-grid-rows: 60px 80px;\n        grid-template-rows: 60px 80px;\n  }\n  .c-weather__main .currentWeather {\n    grid-column: 1/4;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n  }\n  .c-weather__main h2 {\n    font-size: 20px;\n    margin: 10px 0;\n  }\n  .c-weather__main h3 {\n    font-size: 18px;\n    margin: 10px 0;\n  }\n  .c-weather__main .headings {\n    margin-left: 16px;\n    padding: 0;\n  }\n  .c-weather__main .todaysForecast {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n    grid-column: 1/3;\n    padding: 15px;\n  }\n  .c-weather__currentTemp {\n    font-size: 60px;\n  }\n  .c-weather__bigImg {\n    width: 90px;\n    height: auto;\n  }\n  .c-weather__forecast {\n    display: block;\n    text-align: left;\n    margin: 20px 0 0 30px;\n  }\n  .c-weather__forecast p {\n    display: inline;\n  }\n  .c-weather__forecast > div > div {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 40% 10% 30%;\n        grid-template-columns: 40% 10% 30%;\n  }\n  .c-weather__forecast .c-weather__forecastImg {\n    width: 30px;\n    height: auto;\n  }\n  .c-weather .todaysForecast p {\n    font-size: 16px;\n    width: 110px;\n    font-weight: bold;\n  }\n  .c-weather__city {\n    margin-left: 5px;\n  }\n  .c-weather__toggle {\n    top: 10px;\n  }\n}\n@media (max-width: 359px) {\n  .c-weather__main {\n    -ms-grid-rows: 95px 80px;\n        grid-template-rows: 95px 80px;\n  }\n  .c-weather__main .headings {\n    display: none;\n  }\n  .c-weather__main .todaysForecast {\n    display: block;\n  }\n  .c-weather__main .currentWeather {\n    margin-top: 20px;\n  }\n  .c-weather__currentTemp {\n    padding-right: 60px;\n  }\n  .c-weather__forecast {\n    display: none;\n  }\n  .c-weather__header {\n    margin-top: 12px;\n  }\n  .c-weather__city {\n    position: relative;\n    top: 50px;\n    right: 28px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<section class=\"c-select\">\n    <form class=\"c-select__form\">\n        <div class=\"c-select__input\">\n            <input class=\"c-select__text\" type=\"text\" placeholder=\"City\" name=\"selectedCity\" [(ngModel)]=\"selectedCity\">\n            <button class=\"c-select__button\" (click)=\"getWeatherByCityName()\">\n                <i class=\"material-icons c-select__search\">search</i>\n            </button>\n        </div>\n        <p><span class=\"c-select__separate__word\">or</span><span class=\"c-select__separate__line\">use my\n            <span class=\"c-select__coords\" (click)=\"getWeatherByCoords()\">current position</span></span>\n        </p>\n    </form>\n</section>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<section class=\"c-weather\">\n  <header class=\"c-weather__header\">\n    <i [routerLink]=\"['/']\" class=\"material-icons c-weather__arrow\">arrow_back</i>\n    <h1 class=\"c-weather__city\">{{ currentCity.name }}</h1>\n    <div class=\"c-weather__toggle\">\n      <label class=\"c-weather__label\">\n        <input [(ngModel)]=\"isFahrenheit\" type=\"checkbox\">\n        <span class=\"c-weather__slider\"></span>\n      </label>\n    </div>\n  </header>\n  <section class=\"c-weather__main\">\n    <div class=\"headings\">\n      <h2>{{ currentCity.currentDate.toLocaleDateString(\"en-US\", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'\n        }) }}</h2>\n      <h3>{{ currentCity.currentWeather }}</h3>\n    </div>\n    <div class=\"currentWeather\">\n      <div *ngIf=\"!isFahrenheit\" class=\"c-weather__currentTemp\">\n        {{ currentCity.currentTemperature }}°C\n      </div>\n      <div *ngIf=\"isFahrenheit\" class=\"c-weather__currentTemp\">\n        {{ currentCity.currentTemperature | convertTemp }}°F\n      </div>\n      <div>\n        <img class=\"c-weather__bigImg\" [src]=\"currentCity.iconPath\">\n      </div>\n    </div>\n    <div class=\"todaysForecast\">\n      <p *ngFor=\"let item of currentCity.forecastForDay\">\n        <span *ngIf=\"!isFahrenheit\">\n          {{ item.timeOfDay }}\n          <span class=\"alignRight\">{{ item.temperature }}°C</span>\n        </span>\n        <span *ngIf=\"isFahrenheit\">\n          {{ item.timeOfDay }}\n          <span class=\"alignRight\">{{ item.temperature | convertTemp }}°F</span>\n        </span>\n      </p>\n    </div>\n  </section>\n  <section class=\"c-weather__forecast\">\n    <div *ngFor=\"let item of currentCity.forecastForWeek\">\n      <div *ngIf=\"!isFahrenheit\">\n        <p>{{ item.dayOfWeek }}</p>\n        <img class=\"c-weather__forecastImg\" src=\"wi-thermometer-exterior.svg\">\n        <p>{{ item.temperature }}°C</p>\n      </div>\n      <div *ngIf=\"isFahrenheit\">\n        <p>{{ item.dayOfWeek }}</p>\n        <img class=\"c-weather__forecastImg\" src=\"wi-thermometer-exterior.svg\">\n        <p>{{ item.temperature |convertTemp }}°F</p>\n      </div>\n    </div>\n  </section>\n</section>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].apiUrl;
var API_KEY = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].apiKey;
var GOOGLE_API_URL = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].GoogleApiUrl;
var GOOGLE_API_KEY = __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* config */].GoogleApiKey;
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getCurrentWeatherByCityName = function (city) {
        return this.http.get(API_URL + 'weather?q=' + city + '&units=metric&APPID=' + API_KEY)
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getCurrentWeatherByCoordinates = function (latitude, longitude) {
        return this.http.get(API_URL + 'weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&APPID=' + API_KEY)
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getForecastByCityName = function (city) {
        return this.http.get(API_URL + 'forecast?q=' + city + '&units=metric&APPID=' + API_KEY)
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getForecastByCoordinates = function (latitude, longitude) {
        return this.http.get(API_URL + 'forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&APPID=' + API_KEY)
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.getTimezoneforCity = function (latitude, longitude) {
        var time = new Date();
        var timestamp = Math.floor(time.getTime() / 1000);
        return this.http.get(GOOGLE_API_URL + '?location=' + latitude + ',' + longitude + '&timestamp=' + timestamp + '&key=' + GOOGLE_API_KEY)
            .map(function (res) { return res.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WeatherService);

var _a;
//# sourceMappingURL=weather.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.bundle.js.map