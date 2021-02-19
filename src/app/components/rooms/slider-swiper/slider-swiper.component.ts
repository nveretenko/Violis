import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider-swiper',
  templateUrl: './slider-swiper.component.html',
  styleUrls: ['./slider-swiper.component.scss'],
})
export class SliderSwiperComponent implements OnInit {
  @Input() slides: string[];

  constructor() {}

  public show: boolean = true;
  public type: string = 'component';
  public disabled: boolean = false;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    coverflowEffect: {
      modifier: -1,
      slideShadows: false,
    },
  };

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  ngOnInit(): void {}
}
