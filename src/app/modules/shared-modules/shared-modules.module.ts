import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { RoleComponent } from './shared-components/role/role.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    RouterModule
  ]
})
export class SharedModulesModule { }
