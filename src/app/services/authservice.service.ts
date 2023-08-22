import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LoggedIn: boolean = false;
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInObservable = this.isLoggedIn.asObservable();
  constructor() { }

  login() {
    if(sessionStorage.getItem('applicationAccessToken')){
      this.LoggedIn = true;
      this.isLoggedIn.next(true)
      return this.isLoggedIn;
    }
    else{
      this.LoggedIn = false;
      this.isLoggedIn.next(false)

      return this.isLoggedIn;
    }
  }



  // logout() {
  //   this.isLoggedIn = false
  //   return this.isLoggedIn;
  // }
}
