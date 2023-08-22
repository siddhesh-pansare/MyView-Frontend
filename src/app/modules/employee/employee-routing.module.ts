import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PseudoDashboardComponent } from './pseudo-dashboard/pseudo-dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { InterviewDetailsComponent } from '../shared-modules/Dialogue/interview-details/interview-details.component';
import { InterviewComponent } from './interview/interview.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'employees', component: EmployeesComponent},
  {path:'interviews', component: InterviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
