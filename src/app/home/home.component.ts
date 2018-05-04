import { Component , OnInit } from '@angular/core';
import {AppRouteConfig} from '../app.router-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private goto: AppRouteConfig) {}



}
