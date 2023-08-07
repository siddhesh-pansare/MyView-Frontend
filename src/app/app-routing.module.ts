import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { LoaderComponent } from './modules/shared-modules/shared-components/loader/loader.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'loader', component:LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
