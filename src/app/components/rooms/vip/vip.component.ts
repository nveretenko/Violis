import { Component } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { SetDocTitleService } from '../../../services/set-doc-title.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.scss'],
})
export class VipComponent {
  slides: string[] = [
    'assets/images/vip1.jpg',
    'assets/images/vip2.jpg',
    'assets/images/vip3.jpg',
    'assets/images/vip4.jpg',
    'assets/images/vip5.jpg',
    'assets/images/vip6.jpg',
  ];

  constructor(
    private dateService: DateService,
    private setDocTitleService: SetDocTitleService
  ) {}

  getDate() {
    return this.dateService.date;
  }

  getDocTitle() {
    return this.setDocTitleService.setDocTitle('Виолис/номера');
  }
}
