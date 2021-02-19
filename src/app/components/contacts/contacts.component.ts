import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../services/api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  form: FormGroup;
  mask = '00 (000) 000-00-00';
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private api: ApiService,
    private loadingService: LoadingService
  ) {}

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
      message: [null, Validators.required],
    });
  }
}
