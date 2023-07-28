import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateDialogueComponent } from './modules/shared-modules/Dialogue/certificate-dialogue/certificate-dialogue.component';
import { RemarkDialogueComponent } from './modules/shared-modules/Dialogue/remark-dialogue/remark-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificateDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
