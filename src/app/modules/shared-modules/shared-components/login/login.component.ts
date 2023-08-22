import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from 'src/app/services/authservice.service';
import { PublicClientApplication } from '@azure/msal-browser';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  email: string;
  isIframe = false;
  isLoggedIn = false;
  loginDisplay = false;
  msalInstance!: PublicClientApplication;
  constructor(
    private http: HttpClient,
    private router: Router,
    private contexts: ChildrenOutletContexts, 

      private authService: MsalService,
    private authServices: AuthService
  ) {
    this.email = '';
    const msalConfig = {
      auth: {
        clientId: '6c36c042-0bfb-450c-81b9-bdca9a92c9e4',
        authority:"https://login.microsoftonline.com/b9806c7d-9280-4e44-afea-6dc0ff495c2f", 
        redirectUri: 'http://localhost:4200/callback',
      },
    };
    this.msalInstance = new PublicClientApplication(msalConfig);
  
  
    
  }

  async ngOnInit() {
    await this.initializeMsal();
    
  }
  async initializeMsal() {
    await this.msalInstance.initialize();
    console.log('MSAL initialized');
  }

  // onLoginSSO() {
  //   this.authService
  //     .loginPopup({ scopes: ['User.Read'] })
  //     .subscribe({
  //       next: (result: { idToken: string; accessToken: string }) => {
  //         // Store tokens in sessionStorage
  //         sessionStorage.setItem('applicationAccessToken', result.idToken);
  //         console.log(result.idToken)
          
  //         sessionStorage.setItem('idToken', result.accessToken);
  //         console.log(result.accessToken)

  //         // Call the check method to proceed after successful login
  //         this.check();
  //       },
  //       error: (error: any) => console.log(error),
  //       complete: () => {},
  //     });
  //   console.log("button is clicked")
  //   this.authService.loginPopup()
  //   .subscribe({
  //     next: (result) => {
  //       console.log(result);
  //       this.setLoginDisplay();
  //     },
  //     error: (error) => console.log(error)
  //   });
    
  // }
  // setLoginDisplay() {
  //   this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  // }
  // check() {
  //   const baseUrl = environment.baseUrl;
  //   const token = sessionStorage.getItem('applicationAccessToken');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   this.http
  //     .get<any>(`${baseUrl}/register-user`, { headers })
  //     .subscribe(
  //       (response) => {
  //         if (response.success) {
  //           this.router.navigate(['/HomeEC']).then(() => {
  //             window.location.reload();
  //           });
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }
  async onLoginSSO() {
    // this.authService.loginPopup({ scopes: ['User.Read'] }).subscribe({
    //   next: (result: { idToken: string; accessToken: string }) => {
    //     // Store tokens in sessionStorage
    //     sessionStorage.setItem('idToken', result.idToken);
    //     sessionStorage.setItem('accessToken', result.accessToken);
  
    //     // Call the check method to proceed after successful login
    //     this.check();
    //   },
    //   error: (error: any) => console.log(error),
    //   complete: () => {
    //     console.log("Login completed.");
    //   },
    // });
    try {
      const loginResponse = await this.msalInstance.loginPopup();
      console.log('Login response:', loginResponse);
      await this.authService.initialize();
      await this.authService.loginPopup({ scopes: ['User.Read'] }).subscribe({
        next: (result: { idToken: string; accessToken: string }) => {
          // Store tokens in sessionStorage
          sessionStorage.setItem('idToken', result.idToken);
          sessionStorage.setItem('accessToken', result.accessToken);
  
          // Call the check method to proceed after successful login
         this.check();
        
        },
        error: (error: any) => console.log(error),
        complete: () => {
          console.log("Login completed.");
        },
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  
    // this.authService.loginPopup({ scopes: ['User.Read'] }).subscribe({
    //   next: (result: { idToken: string; accessToken: string }) => {
    //     // Store tokens in sessionStorage
    //     sessionStorage.setItem('idToken', result.idToken);
    //     sessionStorage.setItem('accessToken', result.accessToken);

    //     // Call the check method to proceed after successful login
    //    // this.check();
      
    //   },
    //   error: (error: any) => console.log(error),
    //   complete: () => {
    //     console.log("Login completed.");
    //   },
    // });
  }
  
  // setLoginDisplay() {
  //   this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  // }
  

  check() {
    // const baseUrl = environment.baseUrl;
    // const token = sessionStorage.getItem('accessToken');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // this.http.get<any>(`${baseUrl}/register-user`, { headers }).subscribe(
    //   (response) => {
    //     if (response.success) {
    //       this.isLoggedIn=true;
    //       this.router.navigate(['/HomeEC']).then(() => {
    //         window.location.reload();
    //       });
    //     }
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    this.router.navigate(['/employee/dashboard'])
  }
  
}
