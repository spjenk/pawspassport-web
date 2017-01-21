import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRouterModule } from './details.routes';

@NgModule({
  imports: [
    CommonModule, DetailsRouterModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
