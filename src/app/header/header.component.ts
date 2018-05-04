import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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

  constructor() { }


}
