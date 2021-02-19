import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private fragment: string;

  constructor(private route: ActivatedRoute) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.fragment.subscribe((f) => {
      const element = document.querySelector('#' + f);
      if (element) element.scrollIntoView();
    });
  }
}
