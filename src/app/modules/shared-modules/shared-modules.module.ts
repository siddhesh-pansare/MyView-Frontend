import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { ClientFeedbackComponent } from './Dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './Dialogue/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './Dialogue/round-details/round-details.component';




@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientFeedbackComponent,
    OtherContributionsComponent,
    RoundDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
