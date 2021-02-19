import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerItem: boolean;

  constructor(private router: Router) {}

  // tslint:disable-next-line:typedef
  public attShowDelay: string;
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.footerItem = event.url !== '/reservation';
      }
    });
  }
}
