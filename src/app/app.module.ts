import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './modules/employee/employee.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
