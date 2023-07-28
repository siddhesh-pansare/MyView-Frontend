import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { CertificationDialogueComponent } from './dialogue/certification-dialogue/certification-dialogue.component';
import { InterviewComponent } from './dialogue/interview-dialogue/interview/interview.component';
import { SessionComponent } from './dialogue/session-dialogue/session/session.component';
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    CertificationDialogueComponent,
    InterviewComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
