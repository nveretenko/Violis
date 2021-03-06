"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var StandardComponent = /** @class */ (function () {
    function StandardComponent(dateService, setDocTitleService) {
        this.dateService = dateService;
        this.setDocTitleService = setDocTitleService;
        this.slides = [
            'assets/images/Standard.jpg',
            'assets/images/Standard1.jpg',
            'assets/images/Standard2.jpg',
        ];
    }
    StandardComponent.prototype.getDate = function () {
        return this.dateService.date;
    };
    StandardComponent.prototype.getDocTitle = function () {
        return this.setDocTitleService.setDocTitle('Виолис/номера');
    };
    StandardComponent = __decorate([
        core_1.Component({
            selector: 'app-standard',
            templateUrl: 'standard.component.html',
            styleUrls: ['standard.component.scss']
        })
    ], StandardComponent);
    return StandardComponent;
}());
exports.StandardComponent = StandardComponent;

//# sourceMappingURL=standard.component.js.map
