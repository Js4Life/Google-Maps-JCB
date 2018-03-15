import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0_D5WKsaUUnYv9q2AIGwFykqHGVinIlI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
