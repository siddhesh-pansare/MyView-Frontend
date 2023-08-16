import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PseudoDashboardComponent } from './pseudo-dashboard/pseudo-dashboard.component';

const routes: Routes = [
  {path:'dashboard', component: PseudoDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
