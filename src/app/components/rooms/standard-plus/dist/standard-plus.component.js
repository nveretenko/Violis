"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LIST = [
    { src: 'assets/images/Standard+.jpg' },
    { src: 'assets/images/Standard1+.jpg' },
    { src: 'assets/images/Standard2+.jpg' },
    { src: 'assets/images/Standard2.jpg' },
];
var StandardPlusComponent = /** @class */ (function () {
    function StandardPlusComponent(dateService, setDocTitleService) {
        this.dateService = dateService;
        this.setDocTitleService = setDocTitleService;
        this.slides = [
            'assets/images/Standard+.jpg',
            'assets/images/Standard1+.jpg',
            'assets/images/Standard2+.jpg',
        ];
    }
    StandardPlusComponent.prototype.getDate = function () {
        return this.dateService.date;
    };
    StandardPlusComponent.prototype.getDocTitle = function () {
        return this.setDocTitleService.setDocTitle('Виолис/номера');
    };
    StandardPlusComponent = __decorate([
        core_1.Component({
            selector: 'app-standard-plus',
            templateUrl: './standard-plus.component.html',
            styleUrls: ['./standard-plus.component.scss']
        })
    ], StandardPlusComponent);
    return StandardPlusComponent;
}());
exports.StandardPlusComponent = StandardPlusComponent;

//# sourceMappingURL=standard-plus.component.js.map
