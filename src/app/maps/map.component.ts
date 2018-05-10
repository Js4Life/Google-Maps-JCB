import { Component , OnInit } from '@angular/core';
import {AppRouteConfig} from '../app.router-config';
import { Marker } from '../models/marker';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  location: any = {};
  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];

  infoWindow = [
    {
      'icon' : '../../assets/Bus.png',
      'busNo' : 'Bus #3546',
       'mobileIcon' : '../../assets/smartphone-call.png',
      'lastseen' : 'Last updated 2m ago',
      'status' : 'STATUS',
      'statusVal' : 'Moving',
      'location' : 'LOCATION',
      'locationVal': 'Indiranagar',
      'speed' : 'SPEED',
      'speedVal': '40km/hr',
       'Time' : 'TIME',
       'TimeVal' : '22mins',
    }];
  constructor (private goto: AppRouteConfig) {}

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    console.log(this.markers);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}
