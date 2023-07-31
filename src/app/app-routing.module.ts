import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';
import { ScratchpadComponent } from './modules/shared-modules/Dialogue/scratchpad/scratchpad.component';

const routes: Routes = [
  { path:'', redirectTo: 'scratchpad', pathMatch:'full' },
  { path:'scratchpad', component:ScratchpadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
