import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';
import { DashboardComponent } from './modules/employee/dashboard/dashboard.component';
import { RoleComponent } from './modules/shared-modules/shared-components/role/role.component';
import { DcInformationComponent } from './modules/employee/dashboard/dc-information/dc-information.component';
import { ECInformationComponent } from './modules/employee/dashboard/ec-information/ec-information.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'header', component:HeaderComponent },
  { path:'sidebar', component:SideBarComponent },
  { path:'dcdashboard', component:DcInformationComponent },
  { path: 'ecdashboard',component:ECInformationComponent}
  // { path:'', component:RoleComponent ,
  // children:[
  //   {
  //     path: 'employee',
  //     loadChildren: () => import('../app/modules/employee/employee.module')
  //     .then(module => module.EmployeeModule)
  //   }
 // ]
//}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
