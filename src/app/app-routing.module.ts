import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { DashboardComponent } from './modules/employee/dashboard/dashboard.component';
import { CertificationDialogueComponent } from './modules/shared-modules/dialogue/certification-dialogue/certification-dialogue.component';
import { InterviewComponent } from './modules/shared-modules/dialogue/interview-dialogue/interview.component';
import { SessionComponent } from './modules/shared-modules/dialogue/session-dialogue/session.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent},
  { path:'certification', component:CertificationDialogueComponent},
  { path:'interview', component:InterviewComponent},
  { path:'session', component:SessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
