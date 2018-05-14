import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AppRouteConfig } from '../app.router-config';
import { Marker } from '../models/marker';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
  // encapsulation : ViewEncapsulation.None
})
export class DetailsComponent {
  @Input() Overview: any = {};
  ViewDetails: boolean = false;
  lat: number = 51.678418;
  lng: number = 7.809007;
  location: any = {};

  firstView:boolean = true;
  search:boolean = true;
  secondView: boolean;
  thirdScreen:boolean=false;
  hideHeadlines:boolean = true;

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


   BusDetails = [{
     'busNo' : 'Bus #8754',
     'status' : 'On trip',
     'busIcon' : '../../assets/icon.png',
     'icon': '../../assets/Location.png',
     'location': 'Pipeline West, Srinagar,Banashankari',
     'city': 'Bengaluru,Karnataka 560026',
     'BusIcon': '../../assets/icon.png',
      'bustitle' : 'STATUS',
      'busStatus': 'MOVING',
      'navigationIcon': '../../assets/navigation.png',
      'navig': 'DIRECTION',
      'navigDirection': 'NW',
      'durationIcon' : '../../assets/Duration.png',
      'duratn': 'DURATION',
      'duration': '1h 32m 03s',
      'distanceTitle': 'DISTANCE',
      'distanceIcon' : '../../assets/road.png',
      'distance': '11km',
      'chasisIcon': '../../assets/chassis.png',
      'chasisTitle': 'Chassis number',
      'engineIcon': '../../assets/engine.png',
      'chasisNo' : '85743687568',
      'engineTitle': 'Engine',
      'Engine' : ' Running',
      'speedIcon': '../../assets/speedometer.png',
      'Speed' : '80 kmph',
      'SpeedTitle' : 'SPEED',
      'ACIcon': '../../assets/fan.png',
      'AirConditionTitle': 'Air Condition',
      'ACstatus': 'ON',
      'FuelCons' : 'Fuel Consumption',
      'FuelIcon': '../../assets/gas-level.png',
      'Fuel': '25L Average',
      'longIcon': '../../assets/speedometer.png',
      'long': 'Longtitude',
      'longVal': '77.67368732',
      'lat': 'Latitude',
      'latVal' : '12.987887',
      'latIcon': '../../assets/speedometer.png',
      'estimateIcon': '../../assets/speedometer.png',
      'estimate1': 'Estimated time to',
      'estimate2': ' reach Destination',
      'estimateVal' : '11.00pm'
   }];


  MockData = [{
    'title': 'Static or Unknown Vehicle Count',
    'count': 2
  }, {
    'title': 'Running Vehicle Count',
    'count': 5
  }, {
    'title': 'Total Vehicle Count',
    'count': 10
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
    'status': 'Stopped'
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

    heading = [{
      'img': '../../assets/Fleet.png',
      'title': 'Fleet'
    },
    {
      'img': '../../assets/Alerts.png',
      'title': 'Alert'
    },
    {
      'img': '../../assets/Support.png',
      'title': 'Support'
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

  showDetails() {
    this.ViewDetails = true;
    this.Overview = true;
  }

  overviewMethod() {
    this.search = true;
    this.firstView = true;
    this.secondView = false;
    this.thirdScreen = false;
    this.hideHeadlines = false;
  }

  allvehicle() {
    this.search = true;
    this.secondView = true;
    this.firstView = false;
    this.thirdScreen = false;
    this.hideHeadlines = true;
  }

  livetracking() {
    this.thirdScreen = true;
    this.search = false;
    this.firstView = false;
    this.secondView = false;
    this.hideHeadlines = true;
  }

  ngOnInit() {
    console.log('input data', this.Overview);
  }
}

