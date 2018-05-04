import { Component, OnInit, Injectable} from '@angular/core';
import { Router} from '@angular/router';

@Injectable()
export class AppRouteConfig implements OnInit {

  constructor(public router: Router) {}

  gotoPage(state) {
    this.router.navigate(['./' + state]);
  }


  ngOnInit() {
  }
}
