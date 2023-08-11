import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteControlService {
  private currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  isEmpRoute(): boolean {
    return this.currentRoute.includes('/emp');
  }

  isEmpTableRoute(): boolean {
    return this.currentRoute.includes('/emptable');
  }
}
