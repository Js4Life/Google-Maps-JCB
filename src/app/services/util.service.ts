import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class UtilService  {
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
  private messageSource = new BehaviorSubject<any>(this.ObjData);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}

