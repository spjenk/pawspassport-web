import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvailabilityComponent } from './components/availability.component';

export const AvailabilityRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: AvailabilityComponent }
]);
