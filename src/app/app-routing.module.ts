import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';

const routes: Routes = [
  { path:'', redirectTo: 'side-bar', pathMatch:'full' },
  { path:'side-bar', component:SideBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
