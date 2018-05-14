import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilService} from '../services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 // overview:boolean = true;

  overview:any;
  allvehicles:any;
  livetracking:any;

  ObjData = [
    {
      'overview' : true,
      'AllVehicle' : false,
      'liveTracking' : false
  },
  {
    'overview' : false,
    'AllVehicle' : true,
    'liveTracking' : false
},    {
  'overview' : false,
  'AllVehicle' : false,
  'liveTracking' : true
}



];

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

  constructor(private utilSvc: UtilService) { }

  show() {
    //  console.log('show');
    // this.overview = true;
    // this.messageEvnt.emit(!this.overview);
    this.messageEvnt.emit(this.ObjData);
  }

  hide() {
    // console.log('hide');
    this.messageEvnt.emit(this.overview);
  }

  ngOnInit() {
    this.utilSvc.currentMessage.subscribe(data =>
        console.log(data)

    )};

}
