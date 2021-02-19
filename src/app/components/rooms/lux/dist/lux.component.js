"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LuxComponent = /** @class */ (function () {
    function LuxComponent(dateService, setDocTitleService) {
        this.dateService = dateService;
        this.setDocTitleService = setDocTitleService;
        this.slides = [
            'assets/images/Lux-1.jpg',
            'assets/images/Lux-2.jpg',
            'assets/images/Lux-3.jpg',
            'assets/images/Lux-4.jpg',
        ];
    }
    LuxComponent.prototype.getDate = function () {
        return this.dateService.date;
    };
    LuxComponent.prototype.getDocTitle = function () {
        return this.setDocTitleService.setDocTitle('Виолис/номера');
    };
    LuxComponent = __decorate([
        core_1.Component({
            selector: 'app-lux',
            templateUrl: './lux.component.html',
            styleUrls: ['./lux.component.scss']
        })
    ], LuxComponent);
    return LuxComponent;
}());
exports.LuxComponent = LuxComponent;

//# sourceMappingURL=lux.component.js.map
