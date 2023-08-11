import { Injectable } from '@angular/core';

export enum UserRole {
  Admin = 'admin',
  Employee = 'employee'
}

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private currentUserRole: UserRole = UserRole.Employee; // Default role

  setUserRole(role: UserRole): void {
    this.currentUserRole = role;
  }

  isAdmin(): boolean {
    return this.currentUserRole === UserRole.Admin;
  }

  isEmployee(): boolean {
    return this.currentUserRole === UserRole.Employee;
  }
}
