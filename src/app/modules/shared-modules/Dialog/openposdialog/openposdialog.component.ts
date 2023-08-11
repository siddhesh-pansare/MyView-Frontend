import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteControlService } from 'src/app/route-control.service';
import { UserRoleService } from 'src/app/user-role.service';
import{UserRole} from 'src/app/user-role.service';



@Component({
  selector: 'app-openposdialog',
  templateUrl: './openposdialog.component.html',
  styleUrls: ['./openposdialog.component.css'],
  providers: [UserRoleService] 
})
export class OpenposdialogComponent {
constructor(private routeControlService: RouteControlService,private userRoleService: UserRoleService,private router:Router){

}
shouldShowChildComponent(): boolean {
  return !this.routeControlService.isEmpTableRoute();
}
switchToAdminRole(): void {
  this.userRoleService.setUserRole(UserRole.Admin);
  this.router.navigate(['/admin']); 
}


get isAdmin(): boolean {
  return this.userRoleService.isAdmin();
}



}
