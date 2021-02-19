"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var VipComponent = /** @class */ (function () {
    function VipComponent(dateService, setDocTitleService) {
        this.dateService = dateService;
        this.setDocTitleService = setDocTitleService;
        this.slides = [
            'assets/images/vip1.jpg',
            'assets/images/vip2.jpg',
            'assets/images/vip3.jpg',
            'assets/images/vip4.jpg',
            'assets/images/vip5.jpg',
            'assets/images/vip6.jpg',
        ];
    }
    VipComponent.prototype.getDate = function () {
        return this.dateService.date;
    };
    VipComponent.prototype.getDocTitle = function () {
        return this.setDocTitleService.setDocTitle('Виолис/номера');
    };
    VipComponent = __decorate([
        core_1.Component({
            selector: 'app-vip',
            templateUrl: './vip.component.html',
            styleUrls: ['./vip.component.scss']
        })
    ], VipComponent);
    return VipComponent;
}());
exports.VipComponent = VipComponent;

//# sourceMappingURL=vip.component.js.map
