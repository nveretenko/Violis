"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(route) {
        this.route = route;
        this.reviews = [
            {
                author: 'Василий',
                content: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0442\u0435\u043B\u044F \u0437\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\n                        \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445. \u041F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044F \u0432\u0430\u043C!"
            },
            {
                author: 'Сергей',
                content: "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C. \u041E\u0442\u0434\u044B\u0445\u0430\u043B\u0438 \u0432 \u044D\u0442\u043E\u043C \u043E\u0442\u0435\u043B\u0435 \u043F\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0445. \u0418\u0437 \u043F\u043B\u044E\u0441\u043E\u0432\n                        \u043D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u0445\u043E\u0436\u0435\u043D\u0430\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u043F\u043B\u044F\u0436. \u0416\u0438\u043B\u0438 \u0432 \u0412\u0418\u041F \u043D\u043E\u043C\u0435\u0440\u0435 \u043D\u0430\n                        \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u0436\u0435. \u0417\u0432\u0443\u043A\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438 \u043D\u0435\u0442 \u0438 \u0441\u043E\u0441\u0435\u0434\u0438 \u0441\u0432\u0435\u0440\u0445\u0443 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0438\u0433\u0440\u0430\u043B\u0438 \u0432 \u0444\u0443\u0442\u0431\u043E\u043B\n                        \u043D\u0430\u0448\u0438\u043C\u0438 \u0433\u043E\u043B\u043E\u0432\u0430\u043C\u0438. \u041F\u043E \u0442\u0435\u043B\u0435\u043A\u0443 30 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438 \u0432\u0441\u0435. \u0412\u0435\u0447\u0435\u0440\u043E\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E\n                        \u043A\u0440\u043E\u043C\u0435 \u043A\u0430\u043A \u0431\u0443\u0445\u0430\u0442\u044C ( \u043C\u044B \u043D\u0435 \u043F\u044C\u0435\u043C ). \u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u043F\u0438\u0442\u0430\u043D\u0438\u0435 \u043A\u0430\u043A \u0432 \u043F\u0438\u043E\u043D\u0435\u0440\u0441\u043A\u043E\u043C \u043B\u0430\u0433\u0435\u0440\u0435\n                        80 \u0445 \u0433\u043E\u0434\u043E\u0432. \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0434\u0435\u0432\u043E\u0447\u043A\u0430\u043C \u043D\u0430 \u0440\u0435\u0446\u0435\u043F\u0448\u043D. \u041E\u043D\u0438 \u0441\u0442\u0430\u0440\u0430\u043B\u0438\u0441\u044C \u043A\u0430\u043A\n                        \u043C\u043E\u0433\u043B\u0438, \u0432\u0441\u044F\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044F, \u043D\u043E \u043A\u0430\u043A \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0433\u043E\u043B\u043E\u0432\u0443 \u043D\u0435 \u043F\u0440\u044B\u0433\u043D\u0435\u0448\u044C."
            },
            { author: 'Константин', content: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432" },
            {
                author: 'Олег',
                content: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0442\u0435\u043B\u044F \u0437\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\n                        \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445. \u041F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044F \u0432\u0430\u043C!"
            },
            {
                author: 'Федор',
                content: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0442\u0435\u043B\u044F \u0437\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\n                        \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445. \u041F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044F \u0432\u0430\u043C!"
            },
            {
                author: 'Антон',
                content: "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0432\u0441\u0435\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0442\u0435\u043B\u044F \u0437\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\n                        \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445. \u041F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u044F \u0432\u0430\u043C!"
            },
        ];
        console.log(this.route);
    }
    CommentsComponent.prototype.updateComments = function (review) {
        this.reviews.unshift(review);
    };
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-comments',
            templateUrl: './comments.component.html',
            styleUrls: ['./comments.component.scss']
        })
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;

//# sourceMappingURL=comments.component.js.map
