"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ShowDelayDirective = /** @class */ (function () {
    function ShowDelayDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        var wer = this.renderer.setStyle(this.elementRef.nativeElement, "color", "red");
    }
    ShowDelayDirective.prototype.ngOnInit = function () {
        setTimeout(this.wer, 3000);
    };
    ShowDelayDirective = __decorate([
        core_1.Directive({
            selector: '[appShowDelay]'
        })
    ], ShowDelayDirective);
    return ShowDelayDirective;
}());
exports.ShowDelayDirective = ShowDelayDirective;

//# sourceMappingURL=show-delay.directive.js.map
