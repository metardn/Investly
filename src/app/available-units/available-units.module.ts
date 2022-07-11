import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableUnitsRoutingModule } from './available-units-routing.module';
import { AvailableUnitsComponent } from './available-units.component';


@NgModule({
  declarations: [
    AvailableUnitsComponent
  ],
  imports: [
    CommonModule,
    AvailableUnitsRoutingModule
  ]
})
export class AvailableUnitsModule { }
