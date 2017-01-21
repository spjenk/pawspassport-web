import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.routes';

@NgModule({
  imports: [ HomeRouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
