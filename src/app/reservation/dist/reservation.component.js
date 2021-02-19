"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(localeService, fb, modalService, api, loadingService) {
        this.localeService = localeService;
        this.fb = fb;
        this.modalService = modalService;
        this.api = api;
        this.loadingService = loadingService;
        this.mask = '00 (000) 000-00-00';
        this.localeService.use('ru');
    }
    Object.defineProperty(ReservationComponent.prototype, "isLoading", {
        get: function () {
            return this.loadingService.isLoading();
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:typedef
    ReservationComponent.prototype.ngOnInit = function () {
        this._generateForm();
    };
    ReservationComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.modal);
    };
    // tslint:disable-next-line:typedef
    ReservationComponent.prototype.submit = function () {
        var _this = this;
        var data = __assign({}, this.form.value);
        if (this.form.valid) {
            this.api
                .sendmail(data)
                .pipe(operators_1.tap(function () { return _this.openModal(); }), operators_1.tap(function () { return _this._generateForm(); }))
                .subscribe();
        }
    };
    ReservationComponent.prototype._generateForm = function () {
        this.form = this.fb.group({
            email: [null, [forms_1.Validators.email, forms_1.Validators.required]],
            name: [null, forms_1.Validators.required],
            phone: ['38(', forms_1.Validators.required],
            adult: [null, forms_1.Validators.required],
            children: [null],
            arrival_date: [null, forms_1.Validators.required],
            date_departure: [null, forms_1.Validators.required],
            message: [null],
            rooms: this.fb.group({
                room: ['standard', forms_1.Validators.required]
            })
        });
    };
    __decorate([
        core_1.ViewChild('modal')
    ], ReservationComponent.prototype, "modal");
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            templateUrl: './reservation.component.html',
            styleUrls: ['./reservation.component.scss']
        })
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;

//# sourceMappingURL=reservation.component.js.map
