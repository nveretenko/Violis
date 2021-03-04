import {
  Component,
  HostListener,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  invisibleHeaderFooter: boolean;
  delta: boolean;

  // tslint:disable-next-line:variable-name
  constructor(
    private router: Router,
    private _meta: Meta,
    private _title: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    const clientHeight = this.document.documentElement.clientHeight;
    if (offset > clientHeight) {
      this.delta = true;
    } else {
      this.delta = false;
    }
  }

  smoothScrollTop(): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.invisibleHeaderFooter = event.urlAfterRedirects !== '/404';
        switch (event.urlAfterRedirects) {
          case '/':
            this._title.setTitle('Отель Виолис');
            this._meta.updateTag({
              name: 'description',
              content:
                'Отдых в Бердянске — Отель Виолис. Необыкновенно комфортные номера с видом на море.',
            });
            break;
          case '/scheme':
            this._title.setTitle('Виолис/Схема');
            this._meta.updateTag({
              name: 'description',
              content:
                'Схема отеля Виолис в Бердянске: расположение коттеджей, админкорпусов, бассейна, ресторана и столовой',
            });
            break;
          case '/comments':
            this._title.setTitle('Виолис/отзывы');
            this._meta.updateTag({
              name: 'description',
              content: 'Отзывы, отели Бердянска - Виолис',
            });
            break;
          case '/reservation':
            this._title.setTitle('Виолис/бронирование');
            this._meta.updateTag({
              name: 'description',
              content: 'Бронирование номера в отеле Виолис Бердянск',
            });
            break;
          case '/standard':
            this._title.setTitle('Виолис/номер Стандарт');
            this._meta.updateTag({
              name: 'description',
              content:
                'Номера категории «Стандарт» для незабываемого отдыха в Бердянске на Азовском море! Отель Виолис предлагает комфортабельные номера в Бердянске на летний сезон по лучшим ценам',
            });
            break;
          case '/standard-plus':
            this._title.setTitle('Виолис/номер Стандарт+');
            this._meta.updateTag({
              name: 'description',
              content:
                'Номера категории «Стандарт+» для незабываемого отдыха в Бердянске! Отель Виолис предлагает 3 номера в Бердянске на летний сезон по отличным ценам',
            });
            break;
          case '/lux':
            this._title.setTitle('Виолис/номер Люкс');
            this._meta.updateTag({
              name: 'description',
              content:
                'Номера категории «Люкс» для незабываемого отдыха в Бердянске! Отель Виолис предлагает 3 номера категории Люкс в Бердянске на летний сезон',
            });
            break;
          case '/lux2':
            this._title.setTitle('Виолис/номер Люкс2');
            this._meta.updateTag({
              name: 'description',
              content:
                'Прекрасный двухкомнатный номер Люкс в Бердянске — цены и условия проживания в отеле Виолис (дальняя коса)',
            });
            break;
          case '/vip':
            this._title.setTitle('Виолис/номер ViP');
            this._meta.updateTag({
              name: 'description',
              content:
                'Номер VIP для незабываемого отдыха в Бердянске! Отель Виолис предлагает Вам 4 номера VIP для комфортного отдыха на Азовском море',
            });
            break;
        }
      }
    });
  }
}
