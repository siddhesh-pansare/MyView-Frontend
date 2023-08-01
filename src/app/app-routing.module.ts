import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { DashboardComponent } from './modules/employee/dashboard/dashboard.component';
import { RoleComponent } from './modules/shared-modules/shared-components/role/role.component';
import { ReporteesComponent } from './modules/manager/associates-component/reportees/reportees.component';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'', component:RoleComponent ,
  children:[
    {
      path: 'employee',
      loadChildren: () => import('../app/modules/employee/employee.module')
      .then(module => module.EmployeeModule)
    }
  ]
},
  {path: 'reportees', component:ReporteesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
