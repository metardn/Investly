import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
  { path: 'available-units', loadChildren: () => import('./available-units/available-units.module').then( m => m.AvailableUnitsModule)},
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then( m => m.InvoicesModule)},
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsModule)},
  { path: 'property-listing', loadChildren: () => import('./property-listing/property-listing.module').then( m => m.PropertyListingModule)},
  { path: 'documentation', loadChildren: () => import('./documentation/documentation.module').then( m => m.DocumentationModule)},
  { path: '',redirectTo:'dashboard', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
