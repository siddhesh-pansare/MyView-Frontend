
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-ec-information',
  templateUrl: './ec-information.component.html',
  styleUrls: ['./ec-information.component.css']
})
export class ECInformationComponent {

  loggedUserData: any;     //variable to store complete data from MIS
  @Input() isMentee: boolean = true; // Set to true for mentees screen
  @Input() isReportee: boolean = false;

  constructor(){}
}
