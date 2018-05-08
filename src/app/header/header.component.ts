import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  overview:boolean = true;

@Output() messageEvnt = new EventEmitter<any>();
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

  show() {
     console.log('show');
    // this.overview = true;
    this.messageEvnt.emit(!this.overview);
  }

  hide() {
    console.log('hide');
    this.messageEvnt.emit(this.overview);
  }

}
