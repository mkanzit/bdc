import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdv-map',
  templateUrl: './pdv-map.component.html',
  styleUrls: ['./pdv-map.component.scss']
})
export class PdvMapComponent implements OnInit {

  map = {
    zoom: 6,
    coordinates: { lat: 31.36236, lng: -7.34977 },
    styles: []
  }

  lat = 31.36236;
  lng = -7.34977;

  constructor() { }

  ngOnInit() {
  }

}
