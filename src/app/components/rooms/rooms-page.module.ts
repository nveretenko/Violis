import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomsComponent} from './rooms.component';
import {StandardComponent} from './standard/standard.component';
import {VipComponent} from './vip/vip.component';
import {LuxComponent} from './lux/lux.component';
import {Lux2Component} from './lux2/lux2.component';
import {StandardPlusComponent} from './standard-plus/standard-plus.component';
import {TariffsComponent} from './tariffs/tariffs.component';
import {RouterModule} from '@angular/router';
import {SwiperConfigInterface, SwiperModule, SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import {SliderSwiperComponent} from './slider-swiper/slider-swiper.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    RoomsComponent,
    StandardComponent,
    VipComponent,
    LuxComponent,
    Lux2Component,
    StandardPlusComponent,
    TariffsComponent,
    SliderSwiperComponent
  ],
  exports: [
    RouterModule,
    RoomsComponent
  ],
  imports: [
    SwiperModule,
    CommonModule,
    RouterModule.forChild([
      {path: 'standard', component: StandardComponent},
      {path: 'standard-plus', component: StandardPlusComponent},
      {path: 'lux', component: LuxComponent},
      {path: 'lux2', component: Lux2Component},
      {path: 'vip', component: VipComponent}])
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class RoomsPageModule {
}
