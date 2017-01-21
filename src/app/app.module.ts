import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SignUpModule } from './sign-up/sign-up.module'
import { AvailabilityModule } from "./availability/availability.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignUpModule,
    AvailabilityModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
