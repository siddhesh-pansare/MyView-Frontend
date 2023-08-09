import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ECInformationComponent } from './dashboard/ec-information/ec-information.component';
import { DcInformationComponent } from './dashboard/dc-information/dc-information.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PseudoDashboardComponent } from './pseudo-dashboard/pseudo-dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DashboardComponent,
    ECInformationComponent,
    DcInformationComponent,
    PseudoDashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatTooltipModule,
    DragDropModule
  ]
})
export class EmployeeModule { }
