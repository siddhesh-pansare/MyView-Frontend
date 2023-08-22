import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ReporteesComponent } from './associates-component/reportees/reportees.component';
import { DcInformationComponent } from './associates-component/dc-information/dc-information.component';
import { ECInformationComponent } from './associates-component/ec-information/ec-information.component';

import { MenteesComponent } from './associates-component/mentees/mentees.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ReporteesComponent,
    ECInformationComponent,
    DcInformationComponent,
    MenteesComponent,

  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class ManagerModule { }
