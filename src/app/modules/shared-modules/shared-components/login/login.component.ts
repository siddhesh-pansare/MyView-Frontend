import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from 'src/app/services/authservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  email: string;
  isIframe = false;
  isLoggedIn = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private contexts: ChildrenOutletContexts, 

      private authService: MsalService,
    private authServices: AuthService
  ) {
    this.email = '';
  
  
    
  }

  ngOnInit(): void {
  //  this.authServices.login();
    this.isIframe = window !== window.parent && !window.opener;
  }

  onLoginSSO() {
    this.authService
      .loginPopup({ scopes: ['User.Read'] })
      .subscribe({
        next: (result: { idToken: string; accessToken: string }) => {
          // Store tokens in sessionStorage
          sessionStorage.setItem('applicationAccessToken', result.idToken);
          
          sessionStorage.setItem('idToken', result.accessToken);

          // Call the check method to proceed after successful login
          this.check();
        },
        error: (error: any) => console.log(error),
        complete: () => {},
      });
    console.log("button is clicked")
  }

  check() {
    const baseUrl = environment.baseUrl;
    const token = sessionStorage.getItem('applicationAccessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http
      .get<any>(`${baseUrl}/register-user`, { headers })
      .subscribe(
        (response) => {
          if (response.success) {
            this.router.navigate(['/employee/dashboard']).then(() => {
              window.location.reload();
            });
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
