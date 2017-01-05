import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {SignUpDialogComponent} from "../sign-up-dialog/sign-up-dialog.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  dialogRef: MdDialogRef<any>;

  constructor(private _dialog: MdDialog) { }

  openDialog() {
    this.dialogRef = this._dialog.open(SignUpDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
