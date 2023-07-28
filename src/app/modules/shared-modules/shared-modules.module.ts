import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { CertificationDialogueComponent } from './shared-components/dialogue/certification-dialogue/certification-dialogue.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    CertificationDialogueComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
