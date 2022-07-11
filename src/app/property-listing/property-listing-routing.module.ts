import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListingComponent } from './property-listing.component';

const routes: Routes = [{ path: '', component: PropertyListingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyListingRoutingModule { }
