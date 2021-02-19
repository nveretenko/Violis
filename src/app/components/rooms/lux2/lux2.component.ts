import { Component } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { SetDocTitleService } from '../../../services/set-doc-title.service';

@Component({
  selector: 'app-lux2',
  templateUrl: './lux2.component.html',
  styleUrls: ['./lux2.component.scss'],
})
export class Lux2Component {
  slides: string[] = [
    'assets/images/lux2-1.jpg',
    'assets/images/lux2-2.jpg',
    'assets/images/lux2-3.jpg',
    'assets/images/lux2-4.jpg',
    'assets/images/lux2-5.jpg',
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
