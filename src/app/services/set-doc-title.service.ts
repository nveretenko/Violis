import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SetDocTitleService {
  setDocTitleService: any;

  constructor(private _title: Title,) {
  }

  setDocTitle(title: string) {
    this._title.setTitle(title);
  }
}
