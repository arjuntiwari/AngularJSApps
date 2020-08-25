"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService(_http) {
        var _this = this;
        this._http = _http;
        this.GetAll = function () {
            var headerDict = {
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                'x-rapidapi-key': 'f477a50e92mshb4029a48e579bb7p1f26c6jsnf1332c5039cd',
                'Access-Control-Allow-Headers': 'Content-Type',
            };
            var requestOptions = {
                headers: new http_1.Headers(headerDict),
            };
            debugger;
            return _this._http.get(_this.actionUrl, requestOptions)
                .map(function (res) { return res.json(); });
        };
        this.actionUrl = 'https://covid-19-data.p.rapidapi.com/country?name=india';
    }
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=Coronavirus.service.js.map