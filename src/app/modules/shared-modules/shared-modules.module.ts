import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { ScratchpadComponent } from './Dialogue/scratchpad/scratchpad.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    ScratchpadComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ]
})
export class SharedModulesModule { }
