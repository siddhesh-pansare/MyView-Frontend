import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateDialogueComponent } from './modules/shared-modules/Dialogue/certificate-dialogue/certificate-dialogue.component';
import { RemarkDialogueComponent } from './modules/shared-modules/Dialogue/remark-dialogue/remark-dialogue.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    CertificateDialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
