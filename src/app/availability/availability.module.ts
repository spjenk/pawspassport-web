import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AvailabilityComponent} from "./components/availability.component";
import { AvailabilityRouterModule } from './availability.routes'

@NgModule({
  imports: [CommonModule, AvailabilityRouterModule],
  exports: [AvailabilityComponent],
  declarations: [AvailabilityComponent]
})

export class AvailabilityModule { }
