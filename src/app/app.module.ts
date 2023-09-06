import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './modules/employee/employee.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './modules/shared-modules/shared-modules.module';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar
import { ManagerModule } from './modules/manager/manager.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OpenPositionsComponent } from './modules/manager/open-positions/open-positions.component';
import { HeaderComponent } from './modules/shared-modules/shared-components/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MsalGuard, MsalGuardConfiguration, MsalInterceptorConfiguration, MsalModule, MsalRedirectComponent, MsalService } from "@azure/msal-angular";
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ServiceWorkerModule } from '@angular/service-worker';


const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

  const msalGuardConfig: MsalGuardConfiguration = {
    interactionType: InteractionType.Popup,
    authRequest: { scopes: ["User.Read"] }
  };
  const msalInterceptorConfig: MsalInterceptorConfiguration = {
    interactionType: InteractionType.Popup,
    protectedResourceMap: new Map<string, string[]>(),
  };


@NgModule({
  declarations: [AppComponent, OpenPositionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EmployeeModule,
    SharedModulesModule,
    FormsModule,
    ManagerModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    NgxUiLoaderModule,
    MatSnackBarModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    MatIconModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "6c36c042-0bfb-450c-81b9-bdca9a92c9e4", // Application (client) ID from the app registration
          authority:"https://login.microsoftonline.com/b9806c7d-9280-4e44-afea-6dc0ff495c2f", // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
          //redirectUri: "https://dedashboard-np.geminisolutions.com/callback", // This is your redirect URI
          redirectUri: "http://localhost:4200/callback",
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        },
      }),
      msalGuardConfig,
      msalInterceptorConfig,
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),


  ],
  providers: [MsalGuard, {provide:LocationStrategy, useClass:HashLocationStrategy},MsalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
