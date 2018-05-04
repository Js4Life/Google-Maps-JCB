import { Component , OnInit } from '@angular/core';
import {AppRouteConfig} from '../app.router-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private goto: AppRouteConfig) {}

  login() {
   console.log('navigate to home');
    this.goto.gotoPage('home');
  }


}
