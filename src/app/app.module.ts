import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { OpenposComponent } from './openpos/openpos.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
