import { UserRole, UserRoleService } from 'src/app/user-role.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childdialog',
  templateUrl: './childdialog.component.html',
  styleUrls: ['./childdialog.component.css']
})
export class ChilddialogComponent {
  constructor(private userRoleService:UserRoleService,private router:Router){

  }
  get isEmployee(): boolean {
    return this.userRoleService.isEmployee();
  }
  switchToEmployeeRole(): void {
    this.userRoleService.setUserRole(UserRole.Employee);
    this.router.navigate(['/employee']);
  }
}
