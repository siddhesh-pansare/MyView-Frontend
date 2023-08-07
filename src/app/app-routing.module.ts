import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { AttendanceDialogComponent } from './modules/shared-modules/Dialog/attendance-dialog/attendance-dialog.component';
import { OpenposComponent } from './modules/openpos/openpos.component';

const routes: Routes = [
  { path:'', redirectTo: '', pathMatch:'full' },
  { path:'attendance', component:AttendanceDialogComponent },
  { path:'header', component:HeaderComponent},
  {path:'openpos',component:OpenposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
