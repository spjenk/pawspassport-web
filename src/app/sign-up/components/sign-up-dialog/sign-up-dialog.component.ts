import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.css']
})

export class SignUpDialogComponent {

    constructor(private dialog: MdDialog) {  }

}
