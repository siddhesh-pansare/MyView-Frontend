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
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { InterviewComponent } from './interview/interview.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ECInformationComponent,
    DcInformationComponent,
    PseudoDashboardComponent,
    DashboardComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    HttpClientModule,
    MatTooltipModule,
    DragDropModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports:[
    EmployeesComponent
  ]
})
export class EmployeeModule { }
