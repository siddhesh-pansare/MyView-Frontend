import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { ClientFeedbackComponent } from './modules/shared-modules/shared-components/Dialog/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './modules/shared-modules/shared-components/Dialog/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './modules/shared-modules/shared-components/Dialog/round-details/round-details.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'client-feedback',component:ClientFeedbackComponent},
  { path:'other-contributions',component:OtherContributionsComponent},
  {path:'round-details',component:RoundDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
