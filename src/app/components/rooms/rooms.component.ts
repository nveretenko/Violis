import { Component, OnInit } from '@angular/core';

export interface Room {
  src: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [
    { src: 'Standard.jpg', title: 'Standard', link: 'standard' },
    { src: 'Standard_plus.jpg', title: 'Standard_plus', link: 'standard-plus' },
    { src: 'lux.jpg', title: 'lux', link: 'lux' },
    { src: 'lux2.jpg', title: 'lux2', link: 'lux2' },
    { src: '4m.jpg', title: 'vip', link: 'vip' },
  ];

  constructor() {}

  ngOnInit() {}
}
