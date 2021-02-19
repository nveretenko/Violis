"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.slides = [
            'assets/images/gallery/01.jpg',
            'assets/images/gallery/02.jpg',
            'assets/images/gallery/03.jpg',
            'assets/images/gallery/04.jpg',
            'assets/images/gallery/05.jpg',
            'assets/images/gallery/06.jpg',
            'assets/images/gallery/07.jpg',
            'assets/images/gallery/08.jpg',
            'assets/images/gallery/09.jpg',
            'assets/images/gallery/10.jpg',
            'assets/images/gallery/11.jpg',
            'assets/images/gallery/12.jpg',
            'assets/images/gallery/13.jpg',
            'assets/images/gallery/14.jpg',
            'assets/images/gallery/15.jpg',
            'assets/images/gallery/16.jpg',
            'assets/images/gallery/17.jpg',
            'assets/images/gallery/18.jpg',
            'assets/images/gallery/19.jpg',
            'assets/images/gallery/20.jpg',
            'assets/images/gallery/21.jpg',
            'assets/images/gallery/22.jpg',
            'assets/images/gallery/23.jpg',
            'assets/images/gallery/24.jpg',
            'assets/images/gallery/25.jpg',
        ];
    }
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.scss']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;

//# sourceMappingURL=slider.component.js.map
