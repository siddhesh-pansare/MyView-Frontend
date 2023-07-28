import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { CertificateDialogueComponent } from './modules/shared-modules/Dialogue/certificate-dialogue/certificate-dialogue.component';
import { RemarkDialogueComponent } from './modules/shared-modules/Dialogue/remark-dialogue/remark-dialogue.component';
const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
 
  { path:'certification', component:CertificateDialogueComponent},
  { path:'Remark', component:RemarkDialogueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
