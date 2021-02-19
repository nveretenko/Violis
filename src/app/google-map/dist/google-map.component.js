"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        this.zoom = 15;
        this.lat = 46.64037286939505;
        this.lng = 36.777843832969666;
        this.label = 'V';
        this.markers = [
            {
                lat: 46.64028067375877,
                lng: 36.777854378,
                draggable: false
            },
        ];
    }
    GoogleMapComponent = __decorate([
        core_1.Component({
            selector: 'app-google-map',
            templateUrl: './google-map.component.html',
            styleUrls: ['./google-map.component.scss']
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;

//# sourceMappingURL=google-map.component.js.map
