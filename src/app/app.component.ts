import { Component , OnInit } from '@angular/core';
import {ServiceRequest} from './services/base.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading:boolean = false;
  constructor (private httpSvc: ServiceRequest) {}

  ngOnInit() {
      this.httpSvc.testGetMethod().subscribe(data => {
      //  console.log('test http', data);
      },
        (err) => {
          console.log('Error', err);
        }
    );
  }
}
