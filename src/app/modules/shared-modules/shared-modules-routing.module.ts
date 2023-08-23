import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModule } from '../employee/employee.module';
import { LoginComponent } from './shared-components/login/login.component';



const routes: Routes = [ { path: 'employee/dashboard', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
