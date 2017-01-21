import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {SignUpDialogComponent} from "../sign-up-dialog/sign-up-dialog.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(public _dialog: MdDialog) {

  }

  openDialog() {
    let dialogRef: MdDialogRef<any>;
    dialogRef = this._dialog.open(SignUpDialogComponent);
  }

}
