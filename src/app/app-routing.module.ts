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
import { AttendanceDialogComponent } from './modules/shared-modules/Dialogue/attendance-dialog/attendance-dialog.component';
import { EmployeesComponent } from './modules/employee/employees/employees.component';
import { BrowserUtils } from "@azure/msal-browser";
import { AwardComponent } from './modules/shared-modules/dialogue/awards-dialogue/award/award.component';
import { CertificationDialogueComponent } from './modules/shared-modules/dialogue/certification-dialogue/certification-dialogue.component';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'p-dashboard', component:PseudoDashboardComponent },
  {path:'reportees',component:ReporteesComponent},
  {path:'mentees',component:MenteesComponent},
  {path:'remark',component:RemarkDialogueComponent},
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


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation:
      !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
        ? "enabledNonBlocking"
        : "disabled", // Set to enabledBlocking to use Angular Universal
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
