import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';
import { ScratchpadComponent } from './modules/shared-modules/Dialogue/scratchpad/scratchpad.component';
import { LoaderComponent } from './modules/shared-modules/Dialogue/loader/loader.component';

const routes: Routes = [
  { path:'', redirectTo: 'loader', pathMatch:'full' },
  { path:'loader', component:LoaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
