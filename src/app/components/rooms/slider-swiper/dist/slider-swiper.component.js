"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ngx_swiper_wrapper_1 = require("ngx-swiper-wrapper");
var SliderSwiperComponent = /** @class */ (function () {
    function SliderSwiperComponent() {
        this.show = true;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: { enabled: true },
            direction: 'horizontal',
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 2,
            coverflowEffect: {
                modifier: -1,
                slideShadows: false
            }
        };
    }
    SliderSwiperComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], SliderSwiperComponent.prototype, "slides");
    __decorate([
        core_1.ViewChild(ngx_swiper_wrapper_1.SwiperComponent)
    ], SliderSwiperComponent.prototype, "componentRef");
    SliderSwiperComponent = __decorate([
        core_1.Component({
            selector: 'app-slider-swiper',
            templateUrl: './slider-swiper.component.html',
            styleUrls: ['./slider-swiper.component.scss']
        })
    ], SliderSwiperComponent);
    return SliderSwiperComponent;
}());
exports.SliderSwiperComponent = SliderSwiperComponent;

//# sourceMappingURL=slider-swiper.component.js.map
