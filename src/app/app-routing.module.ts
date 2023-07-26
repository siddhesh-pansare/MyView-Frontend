import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { DashboardComponent } from './modules/employee/dashboard/dashboard.component';
import { CertificateDialogueComponent } from './modules/shared-modules/Dialogue/certificate-dialogue/certificate-dialogue.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'Dialogue', component:CertificateDialogueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
