import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { AuthService } from './services/authservice.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IntelliManager-Frontend';
  isLoggedIn = false;
  constructor(private contexts: ChildrenOutletContexts, private authService: AuthService,private ngxLoader: NgxUiLoaderService) {
    // this.isLoggedIn = false;
    this.authService.isLoggedInObservable.subscribe((res: any) => {
      this.isLoggedIn = res;
    });
  }
  

}
