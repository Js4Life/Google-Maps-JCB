import { Component, OnInit } from '@angular/core';
import { AppRouteConfig } from '../app.router-config';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  Overview:boolean = true;
  constructor(private goto: AppRouteConfig) { }

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


  show() {
    this.Overview = !this.Overview;
  }

}
