"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
/* Create a new injection token for injecting the window into a component. */
exports.WINDOW = new core_1.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
exports.WindowRef = WindowRef;
/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
exports.BrowserWindowRef = BrowserWindowRef;
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (common_1.isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
exports.windowFactory = windowFactory;
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
exports.browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
exports.windowProvider = {
    provide: exports.WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, core_1.PLATFORM_ID]
};
/* Create an array of providers. */
exports.WINDOW_PROVIDERS = [
    exports.browserWindowProvider,
    exports.windowProvider
];

//# sourceMappingURL=window.service.js.map
