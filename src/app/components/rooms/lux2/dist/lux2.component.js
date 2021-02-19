"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Lux2Component = /** @class */ (function () {
    function Lux2Component(dateService, setDocTitleService) {
        this.dateService = dateService;
        this.setDocTitleService = setDocTitleService;
        this.slides = [
            'assets/images/lux2-1.jpg',
            'assets/images/lux2-2.jpg',
            'assets/images/lux2-3.jpg',
            'assets/images/lux2-4.jpg',
            'assets/images/lux2-5.jpg',
        ];
    }
    Lux2Component.prototype.getDate = function () {
        return this.dateService.date;
    };
    Lux2Component.prototype.getDocTitle = function () {
        return this.setDocTitleService.setDocTitle('Виолис/номера');
    };
    Lux2Component = __decorate([
        core_1.Component({
            selector: 'app-lux2',
            templateUrl: './lux2.component.html',
            styleUrls: ['./lux2.component.scss']
        })
    ], Lux2Component);
    return Lux2Component;
}());
exports.Lux2Component = Lux2Component;

//# sourceMappingURL=lux2.component.js.map
