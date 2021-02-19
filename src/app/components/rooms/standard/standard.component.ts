import { Component, ViewEncapsulation } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { SetDocTitleService } from '../../../services/set-doc-title.service';

@Component({
  selector: 'app-standard',
  templateUrl: 'standard.component.html',
  styleUrls: ['standard.component.scss'],
})
export class StandardComponent {
  slides: string[] = [
    'assets/images/Standard.jpg',
    'assets/images/Standard1.jpg',
    'assets/images/Standard2.jpg',
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
