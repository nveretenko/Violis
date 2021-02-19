import { Component } from '@angular/core';

interface marker {
  lat: number;
  lng: number;
  draggable?: boolean;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {
  zoom: number = 15;
  lat: number = 46.64037286939505;
  lng: number = 36.777843832969666;
  label: string = 'V';

  constructor() {}

  markers: marker[] = [
    {
      lat: 46.64028067375877,
      lng: 36.777854378,
      draggable: false,
    },
  ];
}
