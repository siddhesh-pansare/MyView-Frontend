import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ReporteesComponent } from './AssociatesComponent/reportees/reportees.component';
import { DcInformationComponent } from './AssociatesComponent/dc-information/dc-information.component';
import { ECInformationComponent } from './AssociatesComponent/ec-information/ec-information.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ReporteesComponent,
    DcInformationComponent,
    ECInformationComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class ManagerModule { }
