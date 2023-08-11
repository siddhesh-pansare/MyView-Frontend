import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    CommonModule,
    SharedModulesModule,
    EmployeeModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
