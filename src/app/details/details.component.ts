import { Component, OnInit } from '@angular/core';
import { AppRouteConfig } from '../app.router-config';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

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

}
