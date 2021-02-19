"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent() {
        this.author = '';
        this.content = '';
        this.onAdd = new core_1.EventEmitter();
    }
    CommentFormComponent.prototype.ngOnInit = function () { };
    CommentFormComponent.prototype.addComment = function () {
        if (this.author.trim() && this.content.trim()) {
            var review = {
                author: this.author,
                content: this.content
            };
            this.onAdd.emit(review);
            this.author = this.content = '';
        }
    };
    __decorate([
        core_1.Output()
    ], CommentFormComponent.prototype, "onAdd");
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-form',
            templateUrl: './comment-form.component.html',
            styleUrls: ['./comment-form.component.scss']
        })
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;

//# sourceMappingURL=comment-form.component.js.map
