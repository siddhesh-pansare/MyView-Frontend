import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { SideBarComponent } from './modules/shared-modules/shared-components/side-bar/side-bar.component';

const routes: Routes = [
  { path:'', redirectTo: 'sidebar', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'header', component:HeaderComponent },
  { path:'sidebar', component:SideBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
