import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './modules/employee/employee.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import{ FormsModule} from '@angular/forms';

import { ManagerModule } from './modules/manager/manager.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OpenPositionsComponent } from './modules/manager/open-positions/open-positions.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [AppComponent, OpenPositionsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EmployeeModule,
    HttpClientModule,
    SharedModulesModule,
    FormsModule,
    ManagerModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
