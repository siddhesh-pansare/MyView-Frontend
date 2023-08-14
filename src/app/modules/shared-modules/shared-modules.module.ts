import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar
import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { ClientFeedbackComponent } from './dialogue/client-feedback/client-feedback.component';
import { OtherContributionsComponent } from './dialogue/other-contributions/other-contributions.component';
import { RoundDetailsComponent } from './dialogue/round-details/round-details.component';
import { ScratchpadComponent } from './Dialogue/scratchpad/scratchpad.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoaderComponent } from './dialogue/loader/loader.component';
import { RoleComponent } from './shared-components/role/role.component';
import { RouterModule } from '@angular/router';
import { CertificationDialogueComponent } from './dialogue/certification-dialogue/certification-dialogue.component';
import { RemarkDialogueComponent } from './dialogue/remark-dialogue/remark-dialogue.component';
import { HttpClient } from '@angular/common/http';
import { AttendanceDialogComponent } from './dialogue/attendance-dialog/attendance-dialog.component';

import { AwardComponent } from './dialogue/awards-dialogue/award/award.component';


import { InterviewComponent } from './dialogue/interview-dialogue/interview.component';
import { SessionComponent } from './dialogue/session-dialogue/session.component';
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ClientFeedbackComponent,
    OtherContributionsComponent,
    RoundDetailsComponent,
    ScratchpadComponent,
    LoaderComponent,
    RoleComponent,
    RemarkDialogueComponent,
    AttendanceDialogComponent,
    CertificationDialogueComponent,
    InterviewComponent,
    SessionComponent,
    AwardComponent,
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
    SharedModulesRoutingModule,
    MatSnackBarModule
  ],
  exports:[
    AttendanceDialogComponent,
    SharedModulesRoutingModule,
    HeaderComponent
  ]

})
export class SharedModulesModule {}
