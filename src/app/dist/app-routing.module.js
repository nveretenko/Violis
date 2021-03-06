"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./not-found/not-found.component");
var home_component_1 = require("./home/home.component");
var comments_component_1 = require("./comments/comments.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    {
        path: 'scheme',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./scheme/scheme-page.module'); }).then(function (m) { return m.SchemePageModule; });
        }
    },
    {
        path: 'reservation',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./reservation/reservation-page.module'); }).then(function (m) { return m.ReservationPageModule; });
        }
    },
    { path: 'comments', component: comments_component_1.CommentsComponent },
    { path: '404', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: '404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    preloadingStrategy: router_1.PreloadAllModules,
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    scrollOffset: [0, 90]
                }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
