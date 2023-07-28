import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { CertificateDialogueComponent } from '../shared-modules/Dialogue/certificate-dialogue/certificate-dialogue.component';
import { RemarkDialogueComponent } from './Dialogue/remark-dialogue/remark-dialogue.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    CertificateDialogueComponent,
    RemarkDialogueComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
