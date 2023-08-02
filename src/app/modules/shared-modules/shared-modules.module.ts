import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { ClientFeedbackComponent } from './shared-components/Dialog/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './shared-components/Dialog/other-contributions/other-contributions.component';




@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientFeedbackComponent,
    OtherContributionsComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
