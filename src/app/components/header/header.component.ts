import { Component, OnInit } from '@angular/core';
import { SetDocTitleService } from '../../services/set-doc-title.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibility = false;
  public homeLink: boolean;

  constructor(
    public setDocTitleService: SetDocTitleService,
    private router: Router
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.homeLink = event.url === '/';
      }
    });
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.visibility = !this.visibility;
  }
}
