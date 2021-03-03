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
var AppComponent = /** @class */ (function () {
    // tslint:disable-next-line:variable-name
    function AppComponent(router, _meta, _title) {
        this.router = router;
        this._meta = _meta;
        this._title = _title;
        this.coords = document.documentElement.clientHeight;
    }
    AppComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset > this.coords) {
            this.delta = true;
        }
        else {
            this.delta = false;
        }
        console.log(window.pageYOffset);
        console.log(this.coords);
        console.log(this.delta);
    };
    AppComponent.prototype.smoothScrollTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    // tslint:disable-next-line:typedef
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.invisibleHeaderFooter = (event.urlAfterRedirects !== '/404');
                switch (event.urlAfterRedirects) {
                    case '/':
                        _this._title.setTitle('Отель Виолис');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Отдых в Бердянске — Отель Виолис. Необыкновенно комфортные номера с видом на море.'
                        });
                        break;
                    case '/scheme':
                        _this._title.setTitle('Виолис/Схема');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Схема отеля Виолис в Бердянске: расположение коттеджей, админкорпусов, бассейна, ресторана и столовой'
                        });
                        break;
                    case '/comments':
                        _this._title.setTitle('Виолис/отзывы');
                        _this._meta.updateTag({ name: 'description', content: 'Отзывы, отели Бердянска - Виолис' });
                        break;
                    case '/reservation':
                        _this._title.setTitle('Виолис/бронирование');
                        _this._meta.updateTag({ name: 'description', content: 'Бронирование номера в отеле Виолис Бердянск' });
                        break;
                    case '/standard':
                        _this._title.setTitle('Виолис/номер Стандарт');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Номера категории «Стандарт» для незабываемого отдыха в Бердянске на Азовском море! Отель Виолис предлагает комфортабельные номера в Бердянске на летний сезон по лучшим ценам'
                        });
                        break;
                    case '/standard-plus':
                        _this._title.setTitle('Виолис/номер Стандарт+');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Номера категории «Стандарт+» для незабываемого отдыха в Бердянске! Отель Виолис предлагает 3 номера в Бердянске на летний сезон по отличным ценам'
                        });
                        break;
                    case '/lux':
                        _this._title.setTitle('Виолис/номер Люкс');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Номера категории «Люкс» для незабываемого отдыха в Бердянске! Отель Виолис предлагает 3 номера категории Люкс в Бердянске на летний сезон'
                        });
                        break;
                    case '/lux2':
                        _this._title.setTitle('Виолис/номер Люкс2');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Прекрасный двухкомнатный номер Люкс в Бердянске — цены и условия проживания в отеле Виолис (дальняя коса)'
                        });
                        break;
                    case '/vip':
                        _this._title.setTitle('Виолис/номер ViP');
                        _this._meta.updateTag({
                            name: 'description',
                            content: 'Номер VIP для незабываемого отдыха в Бердянске! Отель Виолис предлагает Вам 4 номера VIP для комфортного отдыха на Азовском море'
                        });
                        break;
                }
            }
        });
    };
    __decorate([
        core_1.HostListener('window:scroll')
    ], AppComponent.prototype, "onWindowScroll");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
