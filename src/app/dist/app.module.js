"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var alert_1 = require("ngx-bootstrap/alert");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var about_component_1 = require("./components/about/about.component");
var contacts_component_1 = require("./components/contacts/contacts.component");
var not_found_component_1 = require("./not-found/not-found.component");
var home_component_1 = require("./home/home.component");
var comments_component_1 = require("./comments/comments.component");
var comment_form_component_1 = require("./comments/comment-form/comment-form.component");
var comment_component_1 = require("./comments/comment/comment.component");
var animations_1 = require("@angular/platform-browser/animations");
var shared_module_1 = require("./shared/shared.module");
var google_map_component_1 = require("./google-map/google-map.component");
var core_2 = require("@agm/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var slider_component_1 = require("./components/slider/slider.component");
var rooms_page_module_1 = require("./components/rooms/rooms-page.module");
var http_1 = require("@angular/common/http");
var loading_interceptor_1 = require("./loading.interceptor");
var modal_1 = require("ngx-bootstrap/modal");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var chronos_1 = require("ngx-bootstrap/chronos");
var ngx_swiper_wrapper_1 = require("ngx-swiper-wrapper");
var service_worker_1 = require("@angular/service-worker");
var environment_1 = require("../environments/environment");
var window_service_1 = require("./services/window.service");
chronos_1.defineLocale('ru', chronos_1.ruLocale);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                about_component_1.AboutComponent,
                contacts_component_1.ContactsComponent,
                not_found_component_1.NotFoundComponent,
                home_component_1.HomeComponent,
                comments_component_1.CommentsComponent,
                comment_form_component_1.CommentFormComponent,
                comment_component_1.CommentComponent,
                google_map_component_1.GoogleMapComponent,
                slider_component_1.SliderComponent,
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                datepicker_1.BsDatepickerModule.forRoot(),
                modal_1.ModalModule.forRoot(),
                http_1.HttpClientModule,
                rooms_page_module_1.RoomsPageModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                alert_1.AlertModule.forRoot(),
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyA82eV9FRb8HcXA2skYyp-p98SoXoGqTfw'
                }),
                ngx_swiper_wrapper_1.SwiperModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment_1.environment.production }),
            ],
            exports: [router_1.RouterModule],
            providers: [
                window_service_1.WINDOW_PROVIDERS,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: loading_interceptor_1.LoadingInterceptor,
                    multi: true
                },
                platform_browser_1.Title,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
