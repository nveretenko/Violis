import { Component } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { SetDocTitleService } from '../../../services/set-doc-title.service';

const LIST: any[] = [
  { src: 'assets/images/Standard+.jpg' },
  { src: 'assets/images/Standard1+.jpg' },
  { src: 'assets/images/Standard2+.jpg' },
  { src: 'assets/images/Standard2.jpg' },
];

@Component({
  selector: 'app-standard-plus',
  templateUrl: './standard-plus.component.html',
  styleUrls: ['./standard-plus.component.scss'],
})
export class StandardPlusComponent {
  slides: string[] = [
    'assets/images/Standard+.jpg',
    'assets/images/Standard1+.jpg',
    'assets/images/Standard2+.jpg',
  ];

  constructor(
    private dateService: DateService,
    private setDocTitleService: SetDocTitleService
  ) { }

  getDate() {
    return this.dateService.date;
  }

  getDocTitle() {
    return this.setDocTitleService.setDocTitle('Виолис/номера');
  }
}
