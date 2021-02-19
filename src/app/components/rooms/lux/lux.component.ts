import { Component } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { SetDocTitleService } from '../../../services/set-doc-title.service';

@Component({
  selector: 'app-lux',
  templateUrl: './lux.component.html',
  styleUrls: ['./lux.component.scss'],
})
export class LuxComponent {
  slides: string[] = [
    'assets/images/Lux-1.jpg',
    'assets/images/Lux-2.jpg',
    'assets/images/Lux-3.jpg',
    'assets/images/Lux-4.jpg',
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
