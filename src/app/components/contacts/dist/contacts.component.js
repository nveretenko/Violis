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
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(modalService, fb, api, loadingService) {
        this.modalService = modalService;
        this.fb = fb;
        this.api = api;
        this.loadingService = loadingService;
        this.mask = '00 (000) 000-00-00';
    }
    Object.defineProperty(ContactsComponent.prototype, "isLoading", {
        get: function () {
            return this.loadingService.isLoading();
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:typedef
    ContactsComponent.prototype.ngOnInit = function () {
        this._generateForm();
    };
    ContactsComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.modal);
    };
    // tslint:disable-next-line:typedef
    ContactsComponent.prototype.submit = function () {
        var _this = this;
        var data = __assign({}, this.form.value);
        if (this.form.valid) {
            this.api
                .sendmail(data)
                .pipe(operators_1.tap(function () { return _this.openModal(); }), operators_1.tap(function () { return _this._generateForm(); }))
                .subscribe();
        }
    };
    ContactsComponent.prototype._generateForm = function () {
        this.form = this.fb.group({
            email: [null, [forms_1.Validators.email, forms_1.Validators.required]],
            name: [null, forms_1.Validators.required],
            phone: ['38(', forms_1.Validators.required],
            message: [null, forms_1.Validators.required]
        });
    };
    __decorate([
        core_1.ViewChild('modal')
    ], ContactsComponent.prototype, "modal");
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss']
        })
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;

//# sourceMappingURL=contacts.component.js.map
