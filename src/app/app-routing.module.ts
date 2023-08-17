import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { DashboardComponent } from './modules/employee/dashboard/dashboard.component';
import { RoleComponent } from './modules/shared-modules/shared-components/role/role.component';
import { PseudoDashboardComponent } from './modules/employee/pseudo-dashboard/pseudo-dashboard.component';
import { ReporteesComponent } from './modules/manager/associates-component/reportees/reportees.component';
import { ECInformationComponent } from './modules/employee/dashboard/ec-information/ec-information.component';
import { DcInformationComponent } from './modules/employee/dashboard/dc-information/dc-information.component';
import { MenteesComponent } from './modules/manager/associates-component/mentees/mentees.component';
import { RemarkDialogueComponent } from './modules/shared-modules/Dialogue/remark-dialogue/remark-dialogue.component';
import { ClientFeedbackComponent } from './modules/shared-modules/Dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './modules/shared-modules/Dialogue/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './modules/shared-modules/Dialogue/round-details/round-details.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'p-dashboard', component:PseudoDashboardComponent },
  {path:'client-feedback',component:ClientFeedbackComponent},
  {path:'other-contributions',component:OtherContributionsComponent},
  { path:'round-details', component:RoundDetailsComponent },
  { path:'header', component:HeaderComponent },
  { path:'sidebar', component:SideBarComponent },
  { path:'', component:RoleComponent ,
  children:[
    {
      path: 'employee',
      loadChildren: () => import('../app/modules/employee/employee.module')
      .then(module => module.EmployeeModule)
    },
    {
      path: 'manager',
      loadChildren: () => import('../app/modules/manager/manager.module')
      .then(module => module.ManagerModule)
    },
    {
      path: 'admin',
      loadChildren: () => import('../app/modules/admin/admin.module')
      .then(module => module.AdminModule)
    },
    {
      path: 'shared',
      loadChildren: () => import('../app/modules/shared-modules/shared-modules.module')
      .then(module => module.SharedModulesModule)
    },
  ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
