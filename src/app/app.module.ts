import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// routing
import {AppRouting} from './app.routes';
// http Svc
import { HttpModule } from '@angular/http';
import {ServiceRequest} from './services/base.http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule
  ],
  providers: [ServiceRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
