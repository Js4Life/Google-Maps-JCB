import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent} from './details/details.component';
import {FooterComponent} from './footer/footer.component'
// routing
import {AppRouting} from './app.routes';
import {AppRouteConfig} from './app.router-config';
// http Svc
import { HttpModule } from '@angular/http';
import {ServiceRequest} from './services/base.http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule
  ],
  providers: [ServiceRequest, AppRouteConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
