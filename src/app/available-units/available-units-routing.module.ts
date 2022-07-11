import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableUnitsComponent } from './available-units.component';

const routes: Routes = [{ path: '', component: AvailableUnitsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailableUnitsRoutingModule { }
