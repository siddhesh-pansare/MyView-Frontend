import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { ClientFeedbackComponent } from './shared-components/Dialog/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './shared-components/Dialog/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './shared-components/Dialog/round-details/round-details.component';
import { ScratchpadComponent } from './Dialogue/scratchpad/scratchpad.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoaderComponent } from './Dialogue/loader/loader.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientFeedbackComponent,
    OtherContributionsComponent,
    RoundDetailsComponent,
    ScratchpadComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
 
})
export class SharedModulesModule { }
