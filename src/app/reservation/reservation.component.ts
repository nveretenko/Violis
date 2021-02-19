import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  form: FormGroup;
  mask = '00 (000) 000-00-00';
  modalRef: BsModalRef;

  constructor(
    private localeService: BsLocaleService,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private api: ApiService,
    private loadingService: LoadingService
  ) {
    this.localeService.use('ru');
  }

  public get isLoading(): Observable<boolean> {
    return this.loadingService.isLoading();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this._generateForm();
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modal);
  }

  // tslint:disable-next-line:typedef
  submit(): void {
    const data = { ...this.form.value };
    if (this.form.valid) {
      this.api
        .sendmail(data)
        .pipe(
          tap(() => this.openModal()),
          tap(() => this._generateForm())
        )
        .subscribe();
    }
  }

  private _generateForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, Validators.required],
      phone: ['38(', Validators.required],
      adult: [null, Validators.required],
      children: [null],
      arrival_date: [null, Validators.required],
      date_departure: [null, Validators.required],
      message: [null],
      rooms: this.fb.group({
        room: ['standard', Validators.required],
      }),
    });
  }
}
