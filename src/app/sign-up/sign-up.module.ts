import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignUpDialogComponent} from "./components/sign-up-dialog/sign-up-dialog.component";

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    SignUpComponent,
    SignUpDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    SignUpComponent,
    SignUpDialogComponent
  ],
  entryComponents: [SignUpDialogComponent]
})
export class SignUpModule {

}

