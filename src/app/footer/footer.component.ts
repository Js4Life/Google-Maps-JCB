import { Component , OnInit } from '@angular/core';
import {AppRouteConfig} from '../app.router-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor (private goto: AppRouteConfig) {}



}
