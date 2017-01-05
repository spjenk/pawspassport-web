import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AvailabilityComponent } from './availability/availability.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    SignUpComponent,
    SignUpDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  entryComponents: [SignUpDialogComponent],
  providers: [ ],
  bootstrap: [AppComponent, AvailabilityComponent, SignUpComponent]
})
export class AppModule { }
