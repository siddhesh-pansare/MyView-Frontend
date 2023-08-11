
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/shared-modules/shared-components/login/login.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { AttendanceDialogComponent } from './modules/shared-modules/Dialog/attendance-dialog/attendance-dialog.component';
import { EmployeesComponent } from './modules/employee/employees/employees.component';
import { OpenposdialogComponent } from './modules/shared-modules/Dialog/openposdialog/openposdialog.component';
import { ChilddialogComponent } from './modules/shared-modules/Dialog/openposdialog/childdialog/childdialog.component';


const routes: Routes = [
  { path:'', redirectTo: 'employees', pathMatch:'full' },
  { path:'attendance', component:AttendanceDialogComponent },
  { path:'header',component:HeaderComponent },
  { path:'employees',component:EmployeesComponent },
  {path:'admin',component:OpenposdialogComponent},
  { path: 'employee', component: ChilddialogComponent }, // Update with your employee component

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
