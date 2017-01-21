import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'availability', loadChildren: 'app/availability/availability.module#AvailabilityModule' },
  { path: 'details', loadChildren: 'app/details/details.module#DetailsModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
