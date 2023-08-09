import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatOptionModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule
    

  ],
  exports:[
    EmployeesComponent
  ]
})
export class EmployeeModule { }
