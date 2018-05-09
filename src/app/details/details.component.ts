import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { AppRouteConfig } from '../app.router-config';
import { Marker } from '../models/marker';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class DetailsComponent {
  @Input() Overview: boolean = true;
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
  constructor(private goto: AppRouteConfig) {

   }

  MockData = [{
    'title': 'Total Number of Vehicles',
    'count': 10
  }, {
    'title': 'Vehicles Running',
    'count': 5
  }, {
    'title': 'Overspeeding Vehicles',
    'count': 2
  }];

  AllVehicles = [
    {
      'title': 'Bus #8754',
      'location': 'Pipeline West, Srinagar,Banashankari',
      'city': 'Bengaluru,Karnataka 560026',
      'icon': '../../assets/Moving.png',
      'status': 'Moving'
    },
    {
      'title': 'Bus #7669',
      'location': 'Magadi Road,Herohalli,Tunganagara',
      'city': 'Bengaluru,Karnataka 560026',
      'icon': '../../assets/Moving.png',
      'status': 'Moving'
    },
    { 'title': 'Bus #5456',
    'location': 'Chord Rd,Hampi Nagar,RPC Layout,',
    'city': 'Bengaluru,Karnataka 560104',
    'icon': '../../assets/Stop.png',
    'status': 'Stop'
  },{
    'title': 'Bus #3432',
    'location': 'No.193,80 Feet Road,2nd Stage,2nd Block',
    'city': 'Bengaluru,Karnataka 560104',
    'icon': '../../assets/Moving.png',
    'status': 'Moving'
  }];

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
