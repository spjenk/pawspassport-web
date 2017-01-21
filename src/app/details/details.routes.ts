import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

export const DetailsRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: DetailsComponent }
]);
