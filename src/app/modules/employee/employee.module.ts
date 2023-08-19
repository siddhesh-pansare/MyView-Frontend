import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ECInformationComponent } from './dashboard/ec-information/ec-information.component';
import { DcInformationComponent } from './dashboard/dc-information/dc-information.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PseudoDashboardComponent } from './pseudo-dashboard/pseudo-dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InterviewComponent } from './interview/interview.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    DashboardComponent,
    ECInformationComponent,
    DcInformationComponent,
    PseudoDashboardComponent,
    InterviewComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatTooltipModule,
    DragDropModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class EmployeeModule { }
