"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rooms_component_1 = require("./rooms.component");
var standard_component_1 = require("./standard/standard.component");
var vip_component_1 = require("./vip/vip.component");
var lux_component_1 = require("./lux/lux.component");
var lux2_component_1 = require("./lux2/lux2.component");
var standard_plus_component_1 = require("./standard-plus/standard-plus.component");
var tariffs_component_1 = require("./tariffs/tariffs.component");
var router_1 = require("@angular/router");
var ngx_swiper_wrapper_1 = require("ngx-swiper-wrapper");
var slider_swiper_component_1 = require("./slider-swiper/slider-swiper.component");
var DEFAULT_SWIPER_CONFIG = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
var RoomsPageModule = /** @class */ (function () {
  function RoomsPageModule() {
  }

  RoomsPageModule = __decorate([
    core_1.NgModule({
      declarations: [
        rooms_component_1.RoomsComponent,
        standard_component_1.StandardComponent,
        vip_component_1.VipComponent,
        lux_component_1.LuxComponent,
        lux2_component_1.Lux2Component,
        standard_plus_component_1.StandardPlusComponent,
        tariffs_component_1.TariffsComponent,
        slider_swiper_component_1.SliderSwiperComponent
      ],
      exports: [
        router_1.RouterModule,
        rooms_component_1.RoomsComponent
      ],
      imports: [
        ngx_swiper_wrapper_1.SwiperModule,
        common_1.CommonModule,
        router_1.RouterModule.forChild([
          {path: 'standard', component: standard_component_1.StandardComponent},
          {path: 'standard-plus', component: standard_plus_component_1.StandardPlusComponent},
          {path: 'lux', component: lux_component_1.LuxComponent},
          {path: 'lux2', component: lux2_component_1.Lux2Component},
          {path: 'vip', component: vip_component_1.VipComponent}
        ])
      ],
      providers: [
        {
          provide: ngx_swiper_wrapper_1.SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
    })
  ], RoomsPageModule);
  return RoomsPageModule;
}());
exports.RoomsPageModule = RoomsPageModule;

//# sourceMappingURL=rooms-page.module.js.map
