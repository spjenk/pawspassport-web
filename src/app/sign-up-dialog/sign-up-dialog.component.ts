import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})
export class SignUpDialogComponent {
  constructor(public dialogRef: MdDialogRef<any>) { }
}
