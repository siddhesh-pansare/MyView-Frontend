import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { AttendanceDialogComponent } from './modules/shared-modules/Dialog/attendance-dialog/attendance-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpenPositionsComponent } from './modules/manager/open-positions/open-positions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, OpenPositionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModulesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
