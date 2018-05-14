import { Component , OnInit } from '@angular/core';
import {AppRouteConfig} from '../app.router-config';

import {FormGroup, FormControl, FormArray, Validators, FormBuilder} from '@angular/forms';

import {ServiceRequest } from '../services/base.http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Reactive forms demo';
  email = new FormControl('');
  loginForm: FormGroup;


  constructor (private goto: AppRouteConfig, private fb: FormBuilder,private httpSvc:ServiceRequest) {}

  login() {
   console.log('navigate to home');
    this.goto.gotoPage('home');
  }
  loginUser() {
    console.log(this.loginForm.status);
    console.log('value', this.loginForm.value);

    this.httpSvc.Authentication(this.loginForm.value).subscribe(data => {
      console.log('login response', data);
      if (data == 'Allow') {
          this.goto.gotoPage('home');
      }
    }, (err) => {
      console.log('error', err);
    });

    // if (this.loginForm.value.email == 'admin' && this.loginForm.password == 'admin') {
    //     this.goto.gotoPage('home');
    // }
  }

ngOnInit() {
  // this.loginForm = new FormGroup({
  //   email: new FormControl(null, Validators.required),
  //   password : new FormControl(null, [Validators.required, Validators.maxLength(8)])
  // });

  this.loginForm = this.fb.group({
    UserName: new FormControl(null, Validators.required),
    Password : new FormControl(null, [Validators.required, Validators.maxLength(5)])
  });

}



}
