import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { ClientFeedbackComponent } from './modules/shared-modules/shared-components/Dialog/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './modules/shared-modules/shared-components/Dialog/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './modules/shared-modules/shared-components/Dialog/round-details/round-details.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';
import { ScratchpadComponent } from './modules/shared-modules/Dialogue/scratchpad/scratchpad.component';
import { LoaderComponent } from './modules/shared-modules/Dialogue/loader/loader.component';


const routes: Routes = [
  { path:'', redirectTo: 'round-details', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'client-feedback',component:ClientFeedbackComponent},
  { path:'other-contributions',component:OtherContributionsComponent},
  {path:'round-details',component:RoundDetailsComponent},
  { path:'loader', component:LoaderComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
