import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AvailabilityComponent} from "./components/availability.component";

@NgModule({
  imports: [CommonModule],
  exports: [AvailabilityComponent],
  declarations: [AvailabilityComponent]
})

export class AvailabilityModule { }
