import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar
import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { LoginComponent } from './shared-components/login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { AwardComponent } from './dialogue/awards-dialogue/award/award.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    AwardComponent,
  ],
  imports: [CommonModule, SharedModulesRoutingModule, MatSnackBarModule],
})
export class SharedModulesModule {}
