import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { AttendanceDialogComponent } from './Dialog/attendance-dialog/attendance-dialog.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    AttendanceDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ],
  exports:[
    AttendanceDialogComponent,
    SharedModulesRoutingModule,
    HeaderComponent
  ]
})
export class SharedModulesModule { }
